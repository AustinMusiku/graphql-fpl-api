import { AutomaticSubResolvers } from '../types/schema'

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
