import { ManagerHistoryResolvers } from '../types/schema'

export const ManagerHistory: ManagerHistoryResolvers = {
	chips: ({ chips }) => chips,
	current: ({ current }) => current,
	past: ({ past }) => past
}
