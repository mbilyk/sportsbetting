This is a small api that allows you to place bets

# To deploy
### Build Docker Image
```
docker build -t bettingapp .
```

### Create Database in Image
```
docker-compose run bettingapp npm run migrate
```
### Run with Docker Compose
```
$ docker-compose up
```

# Using the API
There are two endpoints `/teams` and `/bets`

## Teams
The teams endpoint can be used to create and view teams

### GET /teams
Returns a json response object with a list of all teams

#### Example Request
```
curl -X GET 'http://localhost:3000/teams/'
```

#### Example Response
```
{
  "status": "OK",
  "statusMessage": "success",
  "respObj": {
    "teams": [
      {
        "id": 1,
        "name": "Houston Spies",
        "createdAt": "2021-11-01T02:09:48.864Z",
        "updatedAt": "2021-11-01T02:09:48.864Z"
      },
      {
        "id": 2,
        "name": "Yellowstone Magic",
        "createdAt": "2021-11-01T02:10:04.184Z",
        "updatedAt": "2021-11-01T02:10:04.184Z"
      },
      {
        "id": 3,
        "name": "Philly Pies",
        "createdAt": "2021-11-01T02:10:16.335Z",
        "updatedAt": "2021-11-01T02:10:16.335Z"
      }
    ]
  }
}
```
### PUT /teams
Creates a team with a given name

#### Example Request
```
curl -X PUT 'http://localhost:3000/teams/' -H 'Content-Type: application/json' -d '{"name": "Dallas Steaks"}'
```

#### Example Response
```
{
  "id": 6,
  "name": "Dallas Steaks",
  "updatedAt": "2021-11-01T03:11:27.368Z",
  "createdAt": "2021-11-01T03:11:27.368Z"
}
```

## Bets
The bets endpoint allows you to view all bets, make bets and delete bets

### PUT /bets
Creates a bet using the parameters `team_id` and `amount`

#### Example Request
```
curl -X PUT 'localhost:3000/bets/' -H 'Content-Type: application/json' -d '{"team_id": 1,"amount": 4000}'
```

#### Example Response
```
{
  "id": 2,
  "TeamId": 1,
  "amount": 4000,
  "updatedAt": "2021-11-01T03:16:04.502Z",
  "createdAt": "2021-11-01T03:16:04.502Z"
}
```

### GET /bets
Returns a json response object with a list of all bets

#### Example Request
```
curl -X GET 'http://localhost:3000/bets/'
```

#### Example Response
```
{
  "status": "OK",
  "statusMessage": "success",
  "respObj": {
    "bets": [
      {
        "id": 2,
        "amount": 4000,
        "createdAt": "2021-11-01T03:16:04.502Z",
        "updatedAt": "2021-11-01T03:16:04.502Z",
        "TeamId": 1,
        "Team": {
          "id": 1,
          "name": "Houston Spies",
          "createdAt": "2021-11-01T02:09:48.864Z",
          "updatedAt": "2021-11-01T02:09:48.864Z"
        }
      },
      {
        "id": 3,
        "amount": 1200,
        "createdAt": "2021-11-01T03:20:11.806Z",
        "updatedAt": "2021-11-01T03:20:11.806Z",
        "TeamId": 5,
        "Team": {
          "id": 5,
          "name": "Tokyo Lift",
          "createdAt": "2021-11-01T03:13:38.984Z",
          "updatedAt": "2021-11-01T03:13:38.984Z"
        }
      }
    ]
  }
}
```
### DELETE /bets/{id}
Deletes bet with id specified in params

#### Example Request
```
curl -X DELETE 'http://localhost:3000/bets/1'
```

#### Example Response
```
Deleted bet with id: 1
```
