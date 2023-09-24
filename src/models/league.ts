export type League = {
	last_updated_data: string | null
	league: LeagueMeta
	new_entries: LeagueRecords
	standings: LeagueRecords
}

export type LeagueRecords = {
	has_next: boolean
	page: number
	results: Standing[] | NewEntry[]
}

export type LeagueMeta = {
	id: number
	name: string
	created: string
	closed: boolean
	max_entries: number | null
	league_type: string
	scoring: string
	admin_entry: number
	start_event: number
	code_privacy: string
	has_cup: boolean
	cup_league: null
}

export type ClassicLeagueMeta = LeagueMeta & {
	rank: number | null
}

export type H2hLeagueMeta = LeagueMeta & {
	ko_rounds: number | null
}

export type Standing = {
	id: number
	player_name: string
	rank: number
	last_rank: number
	rank_sort: number
	total: number
	entry: number
	entry_name: string
}

export type ClassicLeagueStanding = Standing & {
	event_total: number
}

export type H2hLeagueStanding = Standing & {
	division: 176802
	matches_played: 5
	matches_won: 4
	matches_drawn: 0
	matches_lost: 1
	points_for: 311
}

export type NewEntry = {
	entry: number
	entry_name: string
	joined_time: string
	player_first_name: string
	player_last_name: string
}
