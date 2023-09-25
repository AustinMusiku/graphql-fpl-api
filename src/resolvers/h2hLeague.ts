import {
	H2hLeagueResolvers,
	H2hLeagueMetaResolvers,
	H2hLeagueStandingsResolvers,
	H2hLeagueStandingResolvers
} from '@/types/schema'

export const H2hLeague: H2hLeagueResolvers = {
	last_updated_data: ({ last_updated_data }) => last_updated_data,
	league: ({ league }) => league,
	new_entries: ({ new_entries }) => new_entries,
	standings: ({ standings }) => standings
}

export const H2hLeagueMeta: H2hLeagueMetaResolvers = {
	admin_entry: ({ admin_entry }) => admin_entry,
	closed: ({ closed }) => closed,
	code_privacy: ({ code_privacy }) => code_privacy,
	created: ({ created }) => created,
	cup_league: ({ cup_league }) => cup_league,
	has_cup: ({ has_cup }) => has_cup,
	id: ({ id }) => id,
	league_type: ({ league_type }) => league_type,
	ko_rounds: ({ ko_rounds }) => ko_rounds,
	max_entries: ({ max_entries }) => max_entries,
	name: ({ name }) => name,
	scoring: ({ scoring }) => scoring,
	start_event: ({ start_event }) => start_event
}

export const H2hLeagueStandings: H2hLeagueStandingsResolvers = {
	has_next: ({ has_next }) => has_next,
	page: ({ page }) => page,
	results: ({ results }) => results
}

export const H2hLeagueStanding: H2hLeagueStandingResolvers = {
	division: ({ division }) => division,
	entry: ({ entry }) => entry,
	entry_name: ({ entry_name }) => entry_name,
	id: ({ id }) => id,
	last_rank: ({ last_rank }) => last_rank,
	matches_drawn: ({ matches_drawn }) => matches_drawn,
	matches_lost: ({ matches_lost }) => matches_lost,
	matches_played: ({ matches_played }) => matches_played,
	matches_won: ({ matches_won }) => matches_won,
	player_name: ({ player_name }) => player_name,
	points_for: ({ points_for }) => points_for,
	rank: ({ rank }) => rank,
	rank_sort: ({ rank_sort }) => rank_sort,
	total: ({ total }) => total
}
