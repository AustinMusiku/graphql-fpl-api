export type ManagerHistory = {
	current: Gameweek[]
	past: PastSeason[]
	chips: Chip[]
}

export type Gameweek = {
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
	season_name: string
	total_points: number
	rank: number
}

type Chip = {
	name: string
	time: string
	event: number
}
