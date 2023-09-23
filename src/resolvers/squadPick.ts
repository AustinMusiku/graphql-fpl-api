import { SquadPickResolvers } from '../types/schema'

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
