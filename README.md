## Learning Docker
This is an exploration project for me to learn more about Docker, and how to integrate it into more projects.

This project utilizes the mongo image to run a "mongo" container alongside of the "app" container. It is about as bare bones of a NodeJS + MongoDB project as they come.

Some things to note for my person:
  - When specifying a MONGO_URI, the url should resemble: mongodb://<container_name>:27017 so that it does not attempt to connect to localhost:27017.
  - In order for nodemon to properly function, you must "map" a volume of the project src to the container src: volumes: - .:/src/app
    - This may not be the case when working with Docker Version 3.X in which case you must access a caching technique called "delegated"


### Usage
```
$ git clone https://github.com/BlakeGuilloud/node-mongo-demo.git
$ npm run docker:build
$ npm run docker:dev
```

The application will serve on localhost:8080 and expose a /users route.

POST:
```
curl --request POST \
  --url http://localhost:8080/users \
  --header 'content-type: application/json' \
  --data '{
	"name": "blake",
	"email": "b@gmail.com"
}'
```

GET:
```
curl --request GET \
  --url http://localhost:8080/users \
  --header 'content-type: application/json'
```