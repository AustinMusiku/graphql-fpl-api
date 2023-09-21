import { LeagueSummaryResolvers } from '../types/schema'

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
