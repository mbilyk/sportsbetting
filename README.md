# sportsbetting

This is a small api that allows you to place bets

## To deploy
### Build Docker Image
```
$ docker build -t bettingapp .
$ docker run -it bettingapp
```
### Run with Docker Compose
```
$ docker-compose up
```
### Run tests in Docker
```
$ docker-compose run bettingapp npm test
```
