import { PickResolvers } from '../types/schema'

export const Pick: PickResolvers = {
	element: async ({ element }, _, { loaders }) => {
		const player = loaders.playerData.load(element)
		return player
	},
	is_captain: ({ is_captain }) => is_captain,
	is_vice_captain: ({ is_vice_captain }) => is_vice_captain,
	multiplier: ({ multiplier }) => multiplier,
	position: ({ position }) => position
}
