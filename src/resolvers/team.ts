import { TeamResolvers } from '../types/schema'

export const Team: TeamResolvers = {
	code: ({ code }) => code,
	draw: ({ draw }) => draw,
	id: ({ id }) => id,
	loss: ({ loss }) => loss,
	name: ({ name }) => name,
	played: ({ played }) => played,
	points: ({ points }) => points,
	position: ({ position }) => position,
	short_name: ({ short_name }) => short_name,
	strength: ({ strength }) => strength,
	win: ({ win }) => win,
	strength_overall_home: ({ strength_overall_home }) => strength_overall_home,
	strength_overall_away: ({ strength_overall_away }) => strength_overall_away,
	strength_attack_home: ({ strength_attack_home }) => strength_attack_home,
	strength_attack_away: ({ strength_attack_away }) => strength_attack_away,
	strength_defence_home: ({ strength_defence_home }) => strength_defence_home,
	strength_defence_away: ({ strength_defence_away }) => strength_defence_away,
	pulse_id: ({ pulse_id }) => pulse_id,
	players: async ({ id }, _, { loaders }) => {
		const teamPlayers = await loaders.teamPlayers.load(id)
		return teamPlayers
	}
}
