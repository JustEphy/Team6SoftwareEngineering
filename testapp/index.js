require('dotenv').config();
const express = require('express');
const { google } = require('googleapis');

const app = express();

const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.SECRET_ID,
  process.env.REDIRECT_URI
);

app.get('/', (req, res) => {
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar.readonly',
  });
  res.redirect(url);
});

app.get('/redirect', (req, res) => {
  const code = req.query.code;
  if (!code) {
    res.send('Error: No code provided');
    return;
  }

  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error("Couldn't get token", err);
      res.send('Error');
      return;
    }

    oauth2Client.setCredentials(tokens);
    res.send('Successfully logged in');
  });
});

app.get('/calendars', (req, res) => {
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  calendar.calendarList.list({}, (err, response) => {
    if (err) {
      console.error('Error fetching calendars', err);
      res.send('Error');
      return;
    }

    const calendars = response?.data?.items || [];
    res.json(calendars);
  });
});

app.get('/events', (req, res) => {
  const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
  calendar.events.list(
    {
      calendarId: 'primary',
      timeMin: new Date().toISOString(),
      maxResults: 10,
      singleEvents: true,
      orderBy: 'startTime',
    },
    (err, response) => {
      if (err) {
        console.error('Error fetching events', err);
        res.send('Error');
        return;
      }

      const events = response?.data?.items || [];
      res.json(events);
    }
  );
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
