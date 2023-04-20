Fplfriend-api
=============
GraphQL layer on top of the official fantasy premier league api.
This is a the first of a two-part upgrade of my [fplfriend](https://fplfriend.up.railway.app/) app(You seriously need to check it out, it's awesome, I promise😉) where I focus on writing a decoupled backend using typescript and graphql as compared to the initial app version which was all written in javascript and used nodejs + ejs for templating. Although this api adds support for new data offered by the official fantasy premier league e.g., xG, xA, xGI, xGC, etc, it doesn't include all the data from the official api. I'll be adding more data as I need it for the frontend. If you need more data, feel free to open an issue and I'll add it. 

## Getting started

### Installation

#### prerequisites
1. Clone the repository to your local machine using `git clone https://github.com/AustinMusiku/fplfriend-api`
2. Copy the contents of the `.env.example` file to a new file named `.env` and fill in the required fields.

#### using yarn
1. Run the api using `yarn dev`

#### using docker
1. Build the docker image using `docker build -t fplfriend-api .`
2. Run the api using `docker run -p 4500:4500 fplfriend-api`


The api should now be test it out by visiting [http://localhost:4500/graphql](http://localhost:4500/graphql) in your browser.


## Usage
### Example query for a getting a player's data
```graphql
{
  saka: player(id: 13) {
    ...arsenalPlayer
  }
  odegaard: player(id: 7) {
    ...arsenalPlayer
  }
  salah: player(id: 283) {
    ...liverpoolPlayer
  }
  alexander_Arnold: player(id: 285) {
    ...liverpoolPlayer
  }
}

fragment arsenalPlayer on Player {
  first_name
  second_name
  total_points
}

fragment liverpoolPlayer on Player {
  web_name
  UpcomingFixtures(first: 2) {
    is_home
    difficulty
  }
}
```
Produces the following response:
```json
{
  "data": {
    "saka": {
      "first_name": "Bukayo",
      "second_name": "Saka",
      "total_points": 172
    },
    "odegaard": {
      "first_name": "Martin",
      "second_name": "Ødegaard",
      "total_points": 171
    },
    "salah": {
      "web_name": "Salah",
      "UpcomingFixtures": [
        {
          "is_home": true,
          "difficulty": 2
        },
        {
          "is_home": false,
          "difficulty": 3
        }
      ]
    },
    "alexander_Arnold": {
      "web_name": "Alexander-Arnold",
      "UpcomingFixtures": [
        {
          "is_home": true,
          "difficulty": 2
        },
        {
          "is_home": false,
          "difficulty": 3
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

For a full list of available queries and mutations, check out the schema explorer at [fplfriend-api.up.railway.app/graphql](https://fplfriend-api.up.railway.app/graphql)

## Contributing
I could use some help with writing tests. If you're interested in helping out, please feel free to open a pull request.

