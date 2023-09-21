import { ManagerHistoryPastGameweekResolvers as MHCPGResolvers } from '../types/schema'

export const PastGameweek: MHCPGResolvers = {
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
