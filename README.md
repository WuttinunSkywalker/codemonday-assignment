# codemonday-assignment
> this project implement for CODEMONDAY's assignment using Node.js, Express.js, Sequelize ORM, PostgreSQL and Docker,
> this application is code first appoarch that will create and sync database when run an application.

# Getting Started
to start local development you would:
  - Running `docker build -t node-server .` for build image service into a docker container.
  - then run `docker-compose up`or `docker-compose -up -d` for builds the images and starts the containers.
  - if you run `docker-compose -up -d` you need to run `docker-compose logs` for see the port that application running.
  - Be sure to use `docker-compose down` to cleanup after your done. 
