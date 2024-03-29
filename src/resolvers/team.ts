import { TeamResolvers, TeamSetPieceNoteResolvers } from '../types/schema'

export const Team: TeamResolvers = {
	code: ({ code }) => code,
	draw: ({ draw }) => draw,
	id: ({ id }) => id,
	loss: ({ loss }) => loss,
	name: ({ name }) => name,
	played: ({ played }) => played,
	players: async ({ id }, _, { loaders }) => {
		const teamPlayers = await loaders.teamPlayers.load(id)
		return teamPlayers
	},
	points: ({ points }) => points,
	position: ({ position }) => position,
	pulse_id: ({ pulse_id }) => pulse_id,
	short_name: ({ short_name }) => short_name,
	strength: ({ strength }) => strength,
	strength_attack_away: ({ strength_attack_away }) => strength_attack_away,
	strength_attack_home: ({ strength_attack_home }) => strength_attack_home,
	strength_defence_away: ({ strength_defence_away }) => strength_defence_away,
	strength_defence_home: ({ strength_defence_home }) => strength_defence_home,
	strength_overall_away: ({ strength_overall_away }) => strength_overall_away,
	strength_overall_home: ({ strength_overall_home }) => strength_overall_home,
	win: ({ win }) => win,
	set_piece_notes: async ({ id }, _, { loaders }) => {
		const setPieceNotes = await loaders.setPieceNotes.load(id)
		return setPieceNotes.notes
	}
}

export const TeamSetPieceNote: TeamSetPieceNoteResolvers = {
	external_link: ({ external_link }) => external_link,
	info_message: ({ info_message }) => info_message,
	source_link: ({ source_link }) => source_link
}
