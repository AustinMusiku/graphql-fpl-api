import {
	ClassicLeagueResolvers,
	ClassicLeagueMetaResolvers,
	ClassicLeagueStandingsResolvers,
	ClassicLeagueStandingResolvers,
	NewEntriesResolvers,
	NewEntryResolvers
} from '@/types/schema'

export const ClassicLeague: ClassicLeagueResolvers = {
	last_updated_data: ({ last_updated_data }) => last_updated_data,
	league: ({ league }) => league,
	new_entries: ({ new_entries }) => new_entries,
	standings: ({ standings }) => standings
}

export const ClassicLeagueMeta: ClassicLeagueMetaResolvers = {
	admin_entry: ({ admin_entry }) => admin_entry,
	closed: ({ closed }) => closed,
	code_privacy: ({ code_privacy }) => code_privacy,
	created: ({ created }) => created,
	cup_league: ({ cup_league }) => cup_league,
	has_cup: ({ has_cup }) => has_cup,
	id: ({ id }) => id,
	league_type: ({ league_type }) => league_type,
	max_entries: ({ max_entries }) => max_entries,
	name: ({ name }) => name,
	rank: ({ rank }) => rank,
	scoring: ({ scoring }) => scoring,
	start_event: ({ start_event }) => start_event
}

export const ClassicLeagueStandings: ClassicLeagueStandingsResolvers = {
	has_next: ({ has_next }) => has_next,
	page: ({ page }) => page,
	results: ({ results }) => results
}

export const ClassicLeagueStanding: ClassicLeagueStandingResolvers = {
	entry: ({ entry }) => entry,
	entry_name: ({ entry_name }) => entry_name,
	event_total: ({ event_total }) => event_total,
	id: ({ id }) => id,
	last_rank: ({ last_rank }) => last_rank,
	player_name: ({ player_name }) => player_name,
	rank: ({ rank }) => rank,
	rank_sort: ({ rank_sort }) => rank_sort,
	total: ({ total }) => total
}

export const NewEntries: NewEntriesResolvers = {
	has_next: ({ has_next }) => has_next,
	page: ({ page }) => page,
	results: ({ results }) => results
}

export const NewEntry: NewEntryResolvers = {
	entry: ({ entry }) => entry,
	entry_name: ({ entry_name }) => entry_name,
	joined_time: ({ joined_time }) => joined_time,
	player_first_name: ({ player_first_name }) => player_first_name,
	player_last_name: ({ player_last_name }) => player_last_name
}
