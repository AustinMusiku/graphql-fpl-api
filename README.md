# graphql-fpl-api

A Rich GraphQL proxy layer on top of the official Fantasy Premier League REST API

⚠️ This api does not support the two highly volatile data from the official api: gameweek live data and event status. This api relies heavily on caching to reduce the number of roundtrips to the official api and these two datasets are too dynamic to be cached without the risk of constantly serving stale data. An efficient cache invalidation strategy for this case is still being worked on.

[Try the live demo here](https://graphql-fpl-api.onrender.com/graphql)

## Why graphql-fpl-api?

Consider the following query:

```graphql
query Players {
	saka: player(id: 19) {
		...playerStats
	}
	salah: player(id: 308) {
		...playerStats
	}
}

fragment playerStats on Player {
	first_name
	second_name
	total_points

	upcoming_fixtures(first: 1) {
		is_home
		event
		difficulty
		team_h {
			name
		}
		team_a {
			name
		}
	}

	past_fixtures {
		goals_scored
		assists
		opponent_team {
			name
		}
	}
}
```

In order to get the same data using the official REST api, you would have to make 4 separate requests:

```text
1. https://fantasy.premierleague.com/api/bootstrap-static/     - 1.36 MB
2. https://fantasy.premierleague.com/api/fixtures/             - 238.9 KB
3. https://fantasy.premierleague.com/api/element-summary/19/   - 15.1 KB
4. https://fantasy.premierleague.com/api/element-summary/308/  - 16.64 KB
```

These 4 requests would, as of the time of writing this - 2023/24 season, return a total of `1.63 MB` of data transferred over the network. With graphql-fpl-api, you only need to make one request. This is a total of `763 B` (gzipped) transferred over the network. That's a `99.96%` reduction in data transferred over the network!

You might be worried that since graphql-fpl-api is a proxy layer on top of the official api, you would be making twice the number of roundtrips you would have made if you were to use the official api directly. This is not the case. As hinted earlier, graphql-fpl-api also caches the data from the official api. This means that you can make the same query multiple times and only the first request from the first client will hit the official api. Subsequent requests will be served from the cache. This is especially useful for data that doesn't change often like player data, game week data, and fixtures data.

## Getting started

### Installation

1. Clone the repository to your local machine using `git clone https://github.com/AustinMusiku/graphql-fpl-api`
2. Copy the contents of the `.env.example` file to a new file named `.env` and fill in the required fields.

#### using yarn

1. Run the api using `yarn dev`

#### using docker

1. Build the docker image using `docker build -t graphql-fpl-api .`
2. Run the api using `docker run -p 4500:4500 graphql-fpl-api`

The api should now be test it out by visiting [http://localhost:4500/graphql](http://localhost:4500/graphql) in your browser.

## Usage

### Example query for a getting a manager's data

```graphql
query Manager {
	manager(id: 1528511) {
		player_first_name
		player_last_name
		leagues {
			classic {
				name
				entry_rank
			}
		}
		squad(gwId: 8) {
			picks {
				element {
					web_name
				}
				is_captain
			}
		}
	}
}
```

### Example query for a getting a specific gameweek's data

```graphql
query Gameweek6 {
	gameweek(id: 6) {
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

## Contributing

I could use some help with writing tests. If you're interested in helping out, please feel free to open a pull request.
