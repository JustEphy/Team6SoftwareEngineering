in order to run this git repository right now you have to build out the local enviroment as the app is not fully dockerised.

make sure on you comupter you have intalled docker, docker compose pulgin, postgres13, and npm

to run simply type inside vscode:
docker compose build
docker compose up -d db
docker compose up -d flaskapp
to check containers run:
docker ps -a

to make sure postgres is runing type:
docker exec -it db psql -U postgres
now logged into postgres user:
\dt
select * from users;
at this point it should say there is nothing inside this database

now in the command line move directory over to the frontend folder and type:
npm run dev

this should start up next.js dev server and the website will be found on localhost:3000


