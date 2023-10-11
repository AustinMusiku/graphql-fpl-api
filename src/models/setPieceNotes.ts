export type SetPieceNotes = {
	last_updated: string
	teams: TeamSetPieceNotes[]
}

export type TeamSetPieceNotes = {
	notes: TeamSetPieceNote[]
	id: number
}

export type TeamSetPieceNote = {
	external_link: boolean
	info_message: string
	source_link: string
}
