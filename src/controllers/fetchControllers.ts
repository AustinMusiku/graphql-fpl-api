import fetch from 'node-fetch'
// const fetch = require('node-fetch')
// import { general as _general, fixtures as _fixtures, playerById } from './urls'
import { urls } from './urls'

import cache from '../providers/Cache'

class FetchController {
	async getGeneral() {
		try {
			const url = urls.general
			const generalResponse = await fetch(url, {
				headers: {
					'User-Agent': 'ANYTHING_WILL_WORK_HERE'
				}
			})
			const response = await generalResponse.json()
			cache.set('general', response)
			return response
		} catch (err) {
			console.log(err)
		}
	}

	async getFixtures() {
		try {
			let fixtures = cache.get('fixtures')
			if (fixtures) {
				return fixtures
			} else {
				const url = urls.fixtures
				const response = await fetch(url, {
					headers: {
						'User-Agent': 'ANYTHING_WILL_WORK_HERE'
					}
				})
				fixtures = await response.json()
				cache.set('fixtures', fixtures)
				return fixtures
			}
		} catch (err) {
			console.log(err)
		}
	}

	async getFixturesByTeam(teamId: number) {
		try {
			let fixtures = cache.get('fixtures')
			if (!fixtures) {
				const url = urls.fixtures
				const response = await fetch(url, {
					headers: {
						'User-Agent': 'ANYTHING_WILL_WORK_HERE'
					}
				})
				fixtures = await response.json()
				cache.set('fixtures', fixtures)
			}
			const upcomingFixtures = fixtures
				.filter(
					(fixture) =>
						(fixture.team_h === teamId ||
							fixture.team_a === teamId) &&
						fixture.finished === false &&
						fixture.event !== null
				)
				.map((fixture) => {
					return {
						...fixture,
						is_home: fixture.team_h === teamId,
						difficulty:
							fixture.team_h === teamId
								? fixture.team_h_difficulty
								: fixture.team_a_difficulty
					}
				})
				.sort((a, b) => a.event - b.event)
			return upcomingFixtures
		} catch (err) {
			console.log(err)
		}
	}

	async getAllPlayers() {
		try {
			let general = cache.get('general')

			if (general) {
				return general.elements
			} else {
				const url = urls.general
				const response = await fetch(url, {
					headers: {
						'User-Agent': 'XXXXXX'
					}
				})
				const json = await response.json()
				general = json
				cache.set('general', general)
				return general.elements
			}
		} catch (err) {
			console.log(err)
		}
	}

	async getPlayerEventsById(playerId: number) {
		try {
			let player = cache.get(`${playerId}`)
			if (player) {
				return player
			}
			const url = `${urls.playerById}${playerId}/`
			const response = await fetch(url, {
				headers: {
					'User-Agent': 'XXXXXX'
				}
			})
			player = await response.json()
			cache.set(`${playerId}`, player)
			return player
		} catch (err) {
			console.log(err)
		}
	}

	async getPlayerDataById(playerId: number) {
		try {
			const players = await this.getAllPlayers()
			const player = players.find((player) => player.id == playerId)
			return player
		} catch (err) {
			console.log(err)
		}
	}

	async getPlayersByTeam(teamId: number) {
		try {
			const allPlayers = await this.getAllPlayers()
			const filteredPlayers = allPlayers.filter(
				(player) => player.team == teamId
			)
			return filteredPlayers
		} catch (err) {
			console.log(err)
		}
	}

	async getGameWeeks() {
		try {
			const general = cache.get('general')
			if (general) {
				const gws = general.events
				return gws
			} else {
				console.log('miss')
				const url = urls.general
				const response = await fetch(url, {
					headers: {
						'User-Agent': 'XXXXXX'
					}
				})
				const general = await response.json()
				cache.set('general', general)
				return general.events
			}
		} catch (err) {
			console.log(err)
		}
	}

	async getTeams() {
		try {
			const general = cache.get('general')
			if (!general) {
				console.log('miss')
				const url = urls.general
				const response = await fetch(url, {
					headers: {
						'User-Agent': 'XXXXXX'
					}
				})
				const general = await response.json()
				cache.set('general', general)
			}
			return general.teams
		} catch (err) {
			console.log(err)
		}
	}

	async getTeamById(teamId: number) {
		try {
			const teams = await this.getTeams()
			const team = teams.find((team) => team.id == teamId)
			return team
		} catch (err) {
			console.log(err)
		}
	}

	async getElementTypes() {
		try {
			const general = cache.get('general')
			if (!general) {
				const url = urls.general
				const response = await fetch(url, {
					headers: {
						'User-Agent': 'XXXXXX'
					}
				})
				const general = await response.json()
				cache.set('general', general)
			}
			return general.element_types
		} catch (err) {
			console.log(err)
		}
	}

	async getElementTypeById(elementTypeId: number) {
		try {
			const elementTypes = await this.getElementTypes()
			const elementType = elementTypes.find(
				(elementType) => elementType.id == elementTypeId
			)
			return elementType
		} catch (err) {
			console.log(err)
		}
	}
}

export default new FetchController()
