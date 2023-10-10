export type DreamTeam = {
	top_player: DreamTeamTopPlayer
	team: DreamTeamSquadPick[]
}

export type DreamTeamTopPlayer = {
	id: number
	points: number
}

export type DreamTeamSquadPick = {
	element: number
	points: number
	position: number
}
