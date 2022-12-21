import { Chip } from './chip'

type Manager = {
	id: number
	points: number
}

export type GameWeek = {
	id: number
	highest_score: number
	deadline_time: string
	finished: boolean
	is_previous: boolean
	is_current: boolean
	is_next: boolean
	chip_plays: Chip[]
	name: string
	average_entry_score: number
	data_checked: boolean
	highest_scoring_entry: number
	deadline_time_epoch: number
	deadline_time_game_offset: 0
	cup_leagues_created: false
	h2h_ko_matches_created: false
	most_selected: number
	most_transferred_in: number
	top_element: number
	top_element_info: Manager
	transfers_made: number
	most_captained: number
	most_vice_captained: number
}
