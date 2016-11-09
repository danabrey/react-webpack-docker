# react-webpack-docker

Run a React app inside a Docker container with hot module replacement enabled, sass compilation, and ES6 transpiling.

## Prerequisites

* Docker

## Running the app

### Run the frontend app without Docker

* `cd frontend`
* `npm install`
* `npm run start`
* Frontend app running at `http://localhost:3000`

### Or run the whole app using Docker

* `docker-compose up -d`
(-d flag is optional, runs the container in detached mode)

### Notes

The app frontend will be running on [http://localhost:3000](). Hot-reloading middleware is enabled if NODE_ENV isn't 'production'.