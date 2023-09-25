import { LeagueMeta, NewEntries, Standing } from './classicLeague'

// H2H League
export type H2hLeague = {
	last_updated_data: string | null
	league: H2hLeagueMeta
	new_entries: NewEntries
	standings: H2hLeagueStandings
}

export type H2hLeagueMeta = LeagueMeta & {
	ko_rounds: number | null
}

export type H2hLeagueStandings = {
	has_next: boolean
	page: number
	results: H2hLeagueStanding[]
}

export type H2hLeagueStanding = Standing & {
	division: number
	matches_played: number
	matches_won: number
	matches_drawn: number
	matches_lost: number
	points_for: number
}
