export type ManagerHistory = {
	current: PastGameweek[]
	past: PastSeason[]
	chips: GwChip[]
}

export type PastGameweek = {
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

export type PastSeason = {
	season_name: string
	total_points: number
	rank: number
}

export type GwChip = {
	name: string
	time: string
	event: number
}
