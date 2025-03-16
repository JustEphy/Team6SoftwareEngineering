from flask import Flask, jsonify, request, session
from flask_cors import CORS
import datetime

app = Flask(__name__)
app.secret_key = "super_secret_key"
CORS(app, supports_credentials=True)

# Dummy database for testing
events_db = [
    {
        "id": "1",
        "summary": "Meeting",
        "start": {"dateTime": "2023-06-14T09:00:00"},
        "end": {"dateTime": "2023-06-14T10:00:00"},
    },
    {
        "id": "2",
        "summary": "Lunch",
        "start": {"dateTime": "2023-06-14T12:00:00"},
        "end": {"dateTime": "2023-06-14T13:00:00"},
    },
]

@app.route("/get-events", methods=["GET"])
def get_events():
    try:
        return jsonify({"items": events_db})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/add-event", methods=["POST"])
def add_event():
    try:
        data = request.json
        new_event = {
            "id": str(len(events_db) + 1),
            "summary": data["title"],
            "start": {"dateTime": data["start"]},
            "end": {"dateTime": data["end"]},
        }
        events_db.append(new_event)
        return jsonify({"message": "Event added", "event": new_event}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
