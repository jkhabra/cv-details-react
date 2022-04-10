# Dev module

## Running locally

- install docker on your machine
- Run with docker compose for development

```bash
docker-compose up
docker-compose up -d // run in background
docker-compose stop // stop the server or Ctrl+C

docker-compose exec frontend bash // install npm package inside the docker container
docker exec -it e04a0133c4b7 /bin/sh //install packages inside the docker container

```

- build docker container by cloning the repo and running

```bash
docker build -t local:test .
```

- run the docker container on local machine

```bash
docker run -p 3000:3000 local:test
```
