import {
	DreamTeamResolvers,
	DreamTeamSquadPickResolvers
} from '../types/schema'

export const DreamTeam: DreamTeamResolvers = {
	team: ({ team }) => team,
	top_player: async ({ top_player }, _, { loaders }) => {
		const topPlayer = await loaders.playerData.load(top_player.id)
		return topPlayer
	}
}

export const DreamTeamSquadPick: DreamTeamSquadPickResolvers = {
	element: async ({ element }, _, { loaders }) => {
		const player = await loaders.playerData.load(element)
		return player
	},
	position: ({ position }) => position
}
