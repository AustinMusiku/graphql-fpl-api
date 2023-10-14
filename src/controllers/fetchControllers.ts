import fetch from 'node-fetch'
import { urls } from './urls'

import cache from '../providers/Cache'
import { General } from '../models/general'
import { Fixture } from '../models/fixture'
import { PlayerEvent } from '../models/player'
import { Manager } from '../models/manager'
import { ManagerHistory } from '../models/managerHistory'
import { ManagerSquad } from '../models/managerSquad'
import { ClassicLeague } from '../models/classicLeague'
import { H2hLeague } from '../models/h2hLeague'
import { DreamTeam } from '../models/dreamTeam'
import { SetPieceNotes } from '../models/setPieceNotes'

type Cachable =
	| General
	| Fixture[]
	| PlayerEvent
	| Manager
	| ManagerHistory
	| ManagerSquad
	| ClassicLeague
	| H2hLeague
	| DreamTeam
	| SetPieceNotes

class FetchController {
	private cache = cache.getInstance()
	private nextGwDeadline: number | undefined

	// helper
	async getFromApi(url: string) {
		try {
			const payload = await fetch(url, {
				headers: {
					'User-Agent': 'ANYTHING_WILL_WORK_HERE'
				}
			})
			return await payload.json()
		} catch (err) {
			console.log(`Get request to ${url} failed: ${err}`)
		}
	}

	// cache wrapper
	async fetchFromCache(key: string, url: string): Promise<Cachable> {
		try {
			let data = this.cache.get(key) as Cachable
			// incase of a cache miss, fetch from the api
			if (data === undefined) {
				data = await this.getFromApi(url)
			}

			// Check if we just grabbed the general data.
			// If so, set the next gw deadline
			if (key === 'general') {
				const general = data as General
				const nextGw = general.events.find(({ is_next }) => is_next)
				this.nextGwDeadline = Date.parse(nextGw.deadline_time)
			}

			const currentTtl = this.cache.getTtl(key)

			// not cached yet && this.nextGwDeadline is set
			if (currentTtl === undefined && this.nextGwDeadline) {
				this.cache.set(key, data, this.nextGwDeadline)
			}

			// cached && this.nextGwDeadline is set
			// (value is cached though ttl needs to be updated)
			if (currentTtl !== this.nextGwDeadline && this.nextGwDeadline) {
				this.cache.ttl(key, (this.nextGwDeadline - Date.now()) / 1000)
			}

			// not cached yet && this.nextGwDeadline is not set
			if (currentTtl === undefined && this.nextGwDeadline === undefined) {
				this.cache.set(key, data) // use default ttl
			}

			return data
		} catch (err) {
			console.log(`Failed to fetch ${key}: ${err}`)
		}
	}

	// -------------------------------------------------------------------
	async getGeneral(): Promise<General> {
		try {
			const general = (await this.fetchFromCache(
				'general',
				urls['general']
			)) as General

			return general
		} catch (err) {
			console.log(`Error fetching general data: ${err}`)
		}
	}

	async getFixtures(): Promise<Fixture[]> {
		try {
			const fixtures = (await this.fetchFromCache(
				'fixtures',
				urls['fixtures']
			)) as Fixture[]

			return fixtures
		} catch (err) {
			console.log(`Error fetching fixtures data: ${err}`)
		}
	}

	async getPlayerEvents(playerId: number): Promise<PlayerEvent> {
		try {
			const url = urls.playerById + playerId
			const playerEvents = (await this.fetchFromCache(
				`p${playerId}`,
				url
			)) as PlayerEvent

			return playerEvents
		} catch (err) {
			console.log(`Error fetching player-${playerId}: ${err}`)
		}
	}

	async getManager(managerId: number): Promise<Manager> {
		try {
			const url = urls.manager + managerId
			const manager = (await this.fetchFromCache(
				`m${managerId}`,
				url
			)) as Manager

			return manager
		} catch (err) {
			console.log(`Error fetching manager-${managerId}: ${err}`)
		}
	}

	async getManagerHistory(managerId: number): Promise<ManagerHistory> {
		try {
			const url = urls.manager + managerId + '/history/'
			const managerHistory = (await this.fetchFromCache(
				`mh${managerId}`,
				url
			)) as ManagerHistory

			return managerHistory
		} catch (err) {
			console.log(`Error fetching manager-${managerId} history: ${err}`)
		}
	}

	async getManagerSquad(
		managerId: number,
		gwId: number
	): Promise<ManagerSquad> {
		try {
			const url = urls.manager + managerId + '/event/' + gwId + '/picks/'
			const managerSquad = (await this.fetchFromCache(
				`ms${managerId}`,
				url
			)) as ManagerSquad

			return managerSquad
		} catch (err) {
			console.log(`Error fetching manager-${managerId} squad: ${err}`)
		}
	}

	async getClassicLeague(id: number): Promise<ClassicLeague> {
		try {
			const url = urls.classicLeague + id + '/standings/'
			const classicLeague = (await this.fetchFromCache(
				`cl${id}`,
				url
			)) as ClassicLeague

			return classicLeague
		} catch (err) {
			console.log(`Error fetching classic-league ${id}: ${err}`)
		}
	}

	async getH2hLeague(id: number): Promise<H2hLeague> {
		try {
			const url = urls.h2hLeague + id + '/standings/'
			const h2hLeague = (await this.fetchFromCache(
				`hl${id}`,
				url
			)) as H2hLeague

			return h2hLeague
		} catch (err) {
			console.log(`Error fetching h2h-league ${id}: ${err}`)
		}
	}

	async getDreamTeam(gwId: number): Promise<DreamTeam> {
		try {
			const url = urls.dreamTeam + gwId
			const dreamTeam = (await this.fetchFromCache(
				`dt${gwId}`,
				url
			)) as DreamTeam

			return dreamTeam
		} catch (err) {
			console.log(`Error fetching dream team: ${err}`)
		}
	}

	async getSetPieceNotes(): Promise<SetPieceNotes> {
		try {
			const setPieceNotes = (await this.fetchFromCache(
				'setPieceNotes',
				urls['setPieceNotes']
			)) as SetPieceNotes

			return setPieceNotes
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

		type FixtureWithIsHomeAndDifficulty = Fixture & {
			is_home: boolean
			difficulty: number
		}

		function addIsHomeAndDifficulty(
			fixture: Fixture
		): FixtureWithIsHomeAndDifficulty {
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
