export type ManagerHistory = {
	current: Gameweek[]
	past: PastSeason[]
	chips: Chip[]
}

type Gameweek = {
	event: number
	points: number
	total_points: number
	rank: number
	rank_sort: number
	overall_rank: number
	bank: number
	value: number
	event_transfers: number
	event_transfers_cost: number
	points_on_bench: number
}

type PastSeason = {
	element: number
	position: number
	multiplier: number
	is_captain: boolean
	is_vice_captain: boolean
}

type Chip = {
	name: string
	time: string
	event: number
}
