import {
	AutomaticSubResolvers,
	LeagueSummaryResolvers,
	ManagerHistoryChipsResolvers,
	ManagerHistoryPastSeasonResolvers,
	ManagerHistoryResolvers,
	ManagerResolvers,
	ManagerSquadResolvers,
	PastGameweekResolvers,
	SquadPickResolvers
} from '../types/schema'

export const Manager: ManagerResolvers = {
	current_event: ({ current_event }) => current_event,
	favourite_team: ({ favourite_team }) => favourite_team,
	history: async ({ id }, _, { loaders }) => {
		if (!id) return null
		const history = await loaders.managerHistory.load(id)
		return history
	},
	id: ({ id }) => id,
	joined_time: ({ joined_time }) => joined_time,
	last_deadline_bank: ({ last_deadline_bank }) => last_deadline_bank,
	last_deadline_total_transfers: ({ last_deadline_total_transfers }) =>
		last_deadline_total_transfers,
	last_deadline_value: ({ last_deadline_value }) => last_deadline_value,
	leagues: ({ leagues }) => leagues,
	name: ({ name }) => name,
	name_change_blocked: ({ name_change_blocked }) => name_change_blocked,
	player_first_name: ({ player_first_name }) => player_first_name,
	player_last_name: ({ player_last_name }) => player_last_name,
	player_region_id: ({ player_region_id }) => player_region_id,
	player_region_iso_code_long: ({ player_region_iso_code_long }) =>
		player_region_iso_code_long,
	player_region_iso_code_short: ({ player_region_iso_code_short }) =>
		player_region_iso_code_short,
	player_region_name: ({ player_region_name }) => player_region_name,
	squad: async ({ id }, { gwId }, { loaders }) => {
		if (!gwId) return null
		const team = await loaders.managerSquad.load([id, gwId])
		return team
	},
	started_event: ({ started_event }) => started_event,
	summary_event_points: ({ summary_event_points }) => summary_event_points,
	summary_event_rank: ({ summary_event_rank }) => summary_event_rank,
	summary_overall_points: ({ summary_overall_points }) =>
		summary_overall_points,
	summary_overall_rank: ({ summary_overall_rank }) => summary_overall_rank
}

export const LeagueSummary: LeagueSummaryResolvers = {
	admin_entry: async ({ admin_entry }, _, { loaders }) => {
		if (!admin_entry) return null
		const adminEntry = await loaders.managerData.load(admin_entry)
		return adminEntry
	},
	closed: ({ closed }) => closed,
	created: ({ created }) => created,
	cup_league: ({ cup_league }) => cup_league,
	cup_qualified: ({ cup_qualified }) => cup_qualified,
	entry_can_admin: ({ entry_can_admin }) => entry_can_admin,
	entry_can_invite: ({ entry_can_invite }) => entry_can_invite,
	entry_can_leave: ({ entry_can_leave }) => entry_can_leave,
	entry_last_rank: ({ entry_last_rank }) => entry_last_rank,
	entry_rank: ({ entry_rank }) => entry_rank,
	has_cup: ({ has_cup }) => has_cup,
	id: ({ id }) => id,
	league_type: ({ league_type }) => league_type,
	max_entries: ({ max_entries }) => max_entries,
	name: ({ name }) => name,
	rank: ({ rank }) => rank,
	scoring: ({ scoring }) => scoring,
	short_name: ({ short_name }) => short_name,
	start_event: ({ start_event }) => start_event
}

export const ManagerHistory: ManagerHistoryResolvers = {
	chips: ({ chips }) => chips,
	current: ({ current }) => current,
	past: ({ past }) => past
}

export const ManagerHistoryChips: ManagerHistoryChipsResolvers = {
	event: ({ event }) => event,
	name: ({ name }) => name,
	time: ({ time }) => time
}

export const ManagerHistoryPastSeason: ManagerHistoryPastSeasonResolvers = {
	rank: ({ rank }) => rank,
	season_name: ({ season_name }) => season_name,
	total_points: ({ total_points }) => total_points
}

export const PastGameweek: PastGameweekResolvers = {
	bank: ({ bank }) => bank,
	event: ({ event }) => event,
	event_transfers: ({ event_transfers }) => event_transfers,
	event_transfers_cost: ({ event_transfers_cost }) => event_transfers_cost,
	points: ({ points }) => points,
	overall_rank: ({ overall_rank }) => overall_rank,
	points_on_bench: ({ points_on_bench }) => points_on_bench,
	rank: ({ rank }) => rank,
	rank_sort: ({ rank_sort }) => rank_sort,
	total_points: ({ total_points }) => total_points,
	value: ({ value }) => value
}

export const ManagerSquad: ManagerSquadResolvers = {
	active_chip: ({ active_chip }) => active_chip,
	automatic_subs: ({ automatic_subs }) => automatic_subs,
	entry_history: ({ entry_history }) => entry_history,
	picks: ({ picks }) => picks
}

export const SquadPick: SquadPickResolvers = {
	element: async ({ element }, _, { loaders }) => {
		const player = loaders.playerData.load(element)
		return player
	},
	is_captain: ({ is_captain }) => is_captain,
	is_vice_captain: ({ is_vice_captain }) => is_vice_captain,
	multiplier: ({ multiplier }) => multiplier,
	position: ({ position }) => position
}

export const AutomaticSub: AutomaticSubResolvers = {
	element_in: async ({ element_in }, _, { loaders }) => {
		const player = loaders.playerData.load(element_in)
		return player
	},
	element_out: async ({ element_out }, _, { loaders }) => {
		const player = loaders.playerData.load(element_out)
		return player
	},
	entry: ({ entry }) => entry,
	event: ({ event }) => event
}
