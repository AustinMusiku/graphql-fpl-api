import { ManagerSquadResolvers } from '../types/schema'

export const ManagerSquad: ManagerSquadResolvers = {
	active_chip: ({ active_chip }) => active_chip,
	automatic_subs: ({ automatic_subs }) => automatic_subs,
	entry_history: ({ entry_history }) => entry_history,
	picks: ({ picks }) => picks
}
