import { ManagerHistoryPastSeasonResolvers } from '../types/schema'

export const ManagerHistoryPastSeason: ManagerHistoryPastSeasonResolvers = {
	rank: ({ rank }) => rank,
	season_name: ({ season_name }) => season_name,
	total_points: ({ total_points }) => total_points
}
