// import fetch from 'node-fetch'
const fetch = require('node-fetch')
// import { general as _general, fixtures as _fixtures, playerById } from './urls'
const { general: _general, fixtures: _fixtures, playerById } = require('./urls')

const { myCache } = require('./cacheControllers')

const init = async () => {
	// fetch general
	getGeneral()

	// fetch fixtures
	getFixtures()
}

const getGeneral = async () => {
	try {
		const generalResponse = await fetch(_general, {
			headers: {
				'User-Agent': 'ANYTHING_WILL_WORK_HERE'
			}
		})
		let response = await generalResponse.json()
		myCache.set('general', response, 172800)
		return response
	} catch (err) {
		console.log(err)
	}
}

const getFixtures = async () => {
	try {
		let fixtures = myCache.get('fixtures')
		if (fixtures) {
			return fixtures
		} else {
			let url = _fixtures
			let response = await fetch(url, {
				headers: {
					'User-Agent': 'ANYTHING_WILL_WORK_HERE'
				}
			})
			fixtures = await response.json()
			myCache.set('fixtures', fixtures, 172800)
			return fixtures
		}
	} catch (err) {
		console.log(err)
	}
}

const getFixturesByTeam = async (teamId) => {
	try {
		let fixtures = myCache.get('fixtures')
		if (!fixtures) {
			let url = _fixtures
			let response = await fetch(url, {
				headers: {
					'User-Agent': 'ANYTHING_WILL_WORK_HERE'
				}
			})
			fixtures = await response.json()
			myCache.set('fixtures', fixtures, 172800)
		}
		const upcomingFixtures = fixtures
			.filter(
				(fixture) =>
					(fixture.team_h === teamId || fixture.team_a === teamId) &&
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

const getAllPlayers = async () => {
	try {
		let general = myCache.get('general')

		if (general) {
			return general.elements
		} else {
			let url = _general
			let response = await fetch(url, {
				headers: {
					'User-Agent': 'XXXXXX'
				}
			})
			let json = await response.json()
			general = json
			myCache.set('general', general, 172800)
			return general.elements
		}
	} catch (err) {
		console.log(err)
	}
}

const getAllTeams = async () => {
	try {
		let general = myCache.get('general')
		if (general) {
			console.log(general.teams)
			return general.teams
		} else {
			let url = _general
			let response = await fetch(url, {
				headers: {
					'User-Agent': 'XXXXXX'
				}
			})
			let general = await response.json()
			myCache.set('general', general, 172800)
			return general.teams
		}
	} catch (err) {
		console.log(err)
	}
}

const getPlayer = async (playerId) => {
	try {
		let players = await getAllPlayers()
		let player = players.filter((player) => player.id == playerId)
		let { first_name, second_name, id } = player[0]
		return { first_name, second_name, id }
	} catch (err) {
		console.log(err)
	}
}

const getPlayerEventsById = async (playerId) => {
	try {
		let player = myCache.get(`${playerId}`)
		if (player) {
			return player
		}
		let url = `${playerById}${playerId}/`
		let response = await fetch(url, {
			headers: {
				'User-Agent': 'XXXXXX'
			}
		})
		player = await response.json()
		myCache.set(`${playerId}`, player, 172800)
		return player
	} catch (err) {
		console.log(err)
	}
}

const getPlayerDataById = async (playerId) => {
	try {
		let players = await getAllPlayers()
		let player = players.find((player) => player.id == playerId)
		return player
	} catch (err) {
		console.log(err)
	}
}

const getPlayersByTeam = async (teamId) => {
	try {
		let allPlayers = await getAllPlayers()
		let filteredPlayers = allPlayers.filter(
			(player) => player.team == teamId
		)
		return filteredPlayers
	} catch (err) {
		console.log(err)
	}
}

const gameWeeks = async () => {
	try {
		let general = myCache.get('general')
		if (general) {
			let gws = general.events
			return gws
		} else {
			console.log('miss')
			let url = _general
			let response = await fetch(url, {
				headers: {
					'User-Agent': 'XXXXXX'
				}
			})
			let general = await response.json()
			myCache.set('general', general, 172800)
			return general.events
		}
	} catch (err) {
		console.log(err)
	}
}

module.exports = {
	getFixtures,
	getFixturesByTeam,
	getPlayer,
	getPlayerEventsById,
	getPlayerDataById,
	getAllPlayers,
	getAllTeams,
	getPlayersByTeam,
	gameWeeks
}
