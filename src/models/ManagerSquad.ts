export type ManagerSquad = {
	active_chip: string | null
	automatic_subs: AutomaticSub[]
	entry_history: {
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
	picks: Player[]
}
type AutomaticSub = {
	entry: number
	element_in: number
	element_out: number
	event: number
}

type Player = {
	element: number
	position: number
	multiplier: number
	is_captain: boolean
	is_vice_captain: boolean
}
