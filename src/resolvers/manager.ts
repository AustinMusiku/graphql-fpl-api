import { ManagerResolvers } from '../types/schema'

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
