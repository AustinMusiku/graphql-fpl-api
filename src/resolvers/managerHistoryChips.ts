import { ManagerHistoryChipsResolvers } from '../types/schema'

export const ManagerHistoryChips: ManagerHistoryChipsResolvers = {
	event: ({ event }) => event,
	name: ({ name }) => name,
	time: ({ time }) => time
}
