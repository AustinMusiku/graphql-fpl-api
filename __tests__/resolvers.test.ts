import graphqlHelper from './graphqlHelper'

const gameweekQuery = `
	query gameweekQuery($id: Int) {
		gameweek(id: $id) {
			id
		}
	}
`
const playerQuery = `
	query playerQuery($id: Int) {
		player(id: $id) {
			id
		}
	}
`
const gameweeksQuery = `
	query gameweeksQuery {
		gameweeks {
			id
		}
	}
`
const playersQuery = `
	query playersQuery($first: Int) {
		players(first: $first) {
			id
		}
	}
`

describe('resolvers', () => {
	it('gameweek, gameweeks, player, players', async () => {
		const gwResponse = await graphqlHelper(gameweekQuery, { id: 1 })
		expect(gwResponse).toEqual({
			data: {
				gameweek: { id: 1 }
			}
		})

		const playerResponse = await graphqlHelper(playerQuery, { id: 1 })
		expect(playerResponse).toEqual({
			data: {
				player: { id: 1 }
			}
		})

		const gwsResponse = await graphqlHelper(gameweeksQuery)
		expect(gwsResponse.data).toHaveProperty('gameweeks')

		const playersResponse = await graphqlHelper(playersQuery, { first: 1 })
		expect(playersResponse.data).toHaveProperty('players')
	})
})
