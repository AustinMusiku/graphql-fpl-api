Fplfriend-api
=============
GraphQL layer on top of the official fantasy premier league api.
This api doesn't include all the data from the official api, but it does include some useful data that I needed for my [fplfriend](https://fplfriend.herokuapp.com) app. You seriously need to check it out, it's awesome, I promise😉. 

## Getting started

### Installation

1. Clone the repository to your local machine using `git clone https://github.com/AustinMusiku/fplfriend-api`
2. Install the dependencies using `yarn install`
3. Copy the contents of the `.env.example` file to a new file named `.env` and fill in the required fields.
4. Run the api using `yarn dev`

The api should now be test it out by visiting [http://localhost:4500/graphql](http://localhost:4500/graphql) in your browser.


## Usage
### Example query for a getting a player's data
```graphql
{
  player(id: 283) {
    assists
    event_points
    first_name
    goals_scored
    points_per_game
    second_name
    total_points
    transfers_out_event
    transfers_in_event
    UpcomingFixtures(first: 1) {
      difficulty
      event
      kickoff_time
    }
  }
}
```
Produces the following response:
```json
{
  "data": {
    "player": {
      "assists": 4,
      "event_points": 2,
      "first_name": "Mohamed",
      "goals_scored": 6,
      "points_per_game": 5.9,
      "second_name": "Salah",
      "total_points": 82,
      "transfers_out_event": 191609,
      "transfers_in_event": 284875,
      "UpcomingFixtures": [
        {
          "difficulty": 2,
          "event": 17,
          "kickoff_time": "2022-12-26T17:30:00Z"
        }
      ]
    }
  }
}
```

### Example query for a getting a specific gameweek's data
```graphql
{
  gameweek(id: 15) {
    id
    deadline_time
    finished
    highest_score
    avg_points
    chip_plays {
      chip_name
      num_played
    }
    
  }
}
```
Produces the following response:
```json
{
  "data": {
    "gameweek": {
      "id": 15,
      "deadline_time": "2022-11-05T13:30:00Z",
      "finished": true,
      "highest_score": 123,
      "avg_points": 53,
      "chip_plays": [
        {
          "chip_name": "bboost",
          "num_played": 83164
        },
        {
          "chip_name": "freehit",
          "num_played": 61596
        },
        {
          "chip_name": "wildcard",
          "num_played": 150759
        },
        {
          "chip_name": "3xc",
          "num_played": 44333
        }
      ]
    }
  }
}
```

For a full list of available queries and mutations, check out the schema explorer at [http://localhost:4500/graphql](http://localhost:4500/graphql).

## Contributing
I could use some help with writing tests. If you're interested in helping out, please feel free to open a pull request.

