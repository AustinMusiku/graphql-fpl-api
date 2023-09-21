import { PastGameweek } from './managerHistory'

export type ManagerSquad = {
	active_chip: string | null
	automatic_subs: AutomaticSub[]
	entry_history: PastGameweek
	picks: Pick[]
}

export type AutomaticSub = {
	entry: number
	element_in: number
	element_out: number
	event: number
}

export type Pick = {
	element: number
	position: number
	multiplier: number
	is_captain: boolean
	is_vice_captain: boolean
}
