// Classic League
export type ClassicLeague = {
	last_updated_data: string | null
	league: ClassicLeagueMeta
	new_entries: NewEntries
	standings: ClassicLeagueStandings
}

export type ClassicLeagueMeta = LeagueMeta & {
	rank: number | null
}

export type ClassicLeagueStandings = {
	has_next: boolean
	page: number
	results: ClassicLeagueStanding[]
}

export type ClassicLeagueStanding = Standing & {
	event_total: number
}

// ------------------------------------------
// NewEntries
export type NewEntries = {
	has_next: boolean
	page: number
	results: NewEntry[]
}

export type NewEntry = {
	entry: number
	entry_name: string
	joined_time: string
	player_first_name: string
	player_last_name: string
}

// LeagueMeta
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

// Standing
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
