import fetch from 'node-fetch'
import { urls } from './urls'

import cache from '../providers/Cache'

class FetchController {
	// helper
	async fetchFromApi(url: string) {
		try {
			const payload = await fetch(url, {
				headers: {
					'User-Agent': 'ANYTHING_WILL_WORK_HERE'
				}
			})
			return await payload.json()
		} catch (err) {
			console.log(`Failed to fetch from ${url}: ${err}`)
		}
	}

	// cache wrapper
	async fetchFromCache(key: string, url: string) {
		try {
			let data = cache.get(key)
			// incase of a cache miss, fetch from the api and
			// populate the cache
			if (data === undefined) {
				data = await this.fetchFromApi(url)
			}
			cache.set(key, data)
			return data
		} catch (err) {
			console.log(`Failed to fetch ${key}: ${err}`)
		}
	}

	// -------------------------------------------------------------------
	async getGeneral() {
		try {
			return await this.fetchFromCache('general', urls['general'])
		} catch (err) {
			console.log(`Error fetching general data: ${err}`)
		}
	}

	async getFixtures() {
		try {
			return await this.fetchFromCache('fixtures', urls['fixtures'])
		} catch (err) {
			console.log(`Error fetching fixtures data: ${err}`)
		}
	}

	async getPlayerEvents(playerId: number) {
		try {
			const url = urls.playerById + playerId
			return await this.fetchFromCache(`p${playerId}`, url)
		} catch (err) {
			console.log(`Error fetching player-${playerId}: ${err}`)
		}
	}

	async getManager(managerId: number) {
		try {
			const url = urls.manager + managerId
			return await this.fetchFromCache(`m${managerId}`, url)
		} catch (err) {
			console.log(`Error fetching manager-${managerId}: ${err}`)
		}
	}

	async getManagerHistory(managerId: number) {
		try {
			const url = urls.manager + managerId + '/history/'
			return await this.fetchFromCache(`mh${managerId}`, url)
		} catch (err) {
			console.log(`Error fetching manager-${managerId} history: ${err}`)
		}
	}

	async getManagerSquad(managerId: number, gwId: number) {
		try {
			const url = urls.manager + managerId + '/event/' + gwId + '/picks/'
			return await this.fetchFromCache(`ms${managerId}`, url)
		} catch (err) {
			console.log(`Error fetching manager-${managerId} squad: ${err}`)
		}
	}

	async getClassicLeague(id: number) {
		try {
			const url = urls.classicLeague + id + '/standings/'
			return await this.fetchFromCache(`cl${id}`, url)
		} catch (err) {
			console.log(`Error fetching classic-league ${id}: ${err}`)
		}
	}

	async getH2hLeague(id: number) {
		try {
			const url = urls.h2hLeague + id + '/standings/'
			return await this.fetchFromCache(`hl${id}`, url)
		} catch (err) {
			console.log(`Error fetching h2h-league ${id}: ${err}`)
		}
	}

	async getDreamTeam(gwId: number) {
		try {
			const url = urls.dreamTeam + gwId
			return await this.fetchFromCache(`dt`, url)
		} catch (err) {
			console.log(`Error fetching dream team: ${err}`)
		}
	}

	async getSetPieceNotes() {
		try {
			return await this.fetchFromCache(
				'setPieceNotes',
				urls.setPieceNotes
			)
		} catch (err) {
			console.log(`Error fetching set piece notes: ${err}`)
		}
	}

	// -------------------------------------------------------------------
	async getAllPlayers() {
		try {
			const general = await this.getGeneral()
			return general.elements
		} catch (err) {
			console.log(`Error fetching all players: ${err}`)
		}
	}

	async getGameWeeks() {
		try {
			const general = await this.getGeneral()
			return general.events
		} catch (err) {
			console.log(`Error fetching gameweeks: ${err}`)
		}
	}

	async getTeams() {
		try {
			const general = await this.getGeneral()
			return general.teams
		} catch (err) {
			console.log(`Error fetching teams: ${err}`)
		}
	}

	async getElementTypes() {
		try {
			const general = await this.getGeneral()
			return general.element_types
		} catch (err) {
			console.log(`Error fetching element types: ${err}`)
		}
	}

	// -------------------------------------------------------------------
	async getFixturesByTeam(teamId: number) {
		function filterUpcomingFixtures({ team_h, team_a, finished, event }) {
			return (
				(team_h === teamId || team_a === teamId) &&
				finished === false &&
				event !== null
			)
		}

		function addIsHomeAndDifficulty(fixture) {
			return {
				...fixture,
				is_home: fixture.team_h === teamId,
				difficulty:
					fixture.team_h === teamId
						? fixture.team_h_difficulty
						: fixture.team_a_difficulty
			}
		}

		try {
			const fixtures = await this.getFixtures()
			// TODO: memoize upcomingFixtures computation
			const upcomingFixtures = fixtures
				.filter(filterUpcomingFixtures)
				.map(addIsHomeAndDifficulty)
			return upcomingFixtures
		} catch (err) {
			console.log(`Error fetching fixtures by team-${teamId}: ${err}`)
		}
	}

	async getPlayerDataById(playerId: number) {
		try {
			const players = await this.getAllPlayers()
			const player = players.find(({ id }) => id == playerId)
			return player
		} catch (err) {
			console.log(`Error fetching player-${playerId} data: ${err}`)
		}
	}

	async getPlayersByTeam(teamId: number) {
		try {
			const allPlayers = await this.getAllPlayers()
			const filteredPlayers = allPlayers.filter(
				({ team }) => team == teamId
			)
			return filteredPlayers
		} catch (err) {
			console.log(`Error fetching players by team-${teamId}: ${err}`)
		}
	}

	async getTeamById(teamId: number) {
		try {
			const teams = await this.getTeams()
			const team = teams.find(({ id }) => id == teamId)
			return team
		} catch (err) {
			console.log(`Error fetching team-${teamId}: ${err}`)
		}
	}

	async getElementTypeById(elementTypeId: number) {
		try {
			const elementTypes = await this.getElementTypes()
			const elementType = elementTypes.find(
				({ id }) => id == elementTypeId
			)
			return elementType
		} catch (err) {
			console.log(`Error fetching element type-${elementTypeId}: ${err}`)
		}
	}

	async getSetPieceNotesByTeam(teamId: number) {
		try {
			const setPieceNotes = await this.getSetPieceNotes()
			const setPieceNotesByTeam = setPieceNotes.teams.find(
				({ id }) => id == teamId
			)
			return setPieceNotesByTeam
		} catch (err) {
			console.log(
				`Error fetching set piece notes by team-${teamId}: ${err}`
			)
		}
	}
}

export default new FetchController()
