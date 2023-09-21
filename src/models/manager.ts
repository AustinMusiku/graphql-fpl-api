import { ManagerHistory } from './managerHistory'
import { ManagerSquad } from './ManagerSquad'

export type Manager = {
	id: number
	joined_time: string
	started_event: number
	favourite_team: number
	history: ManagerHistory
	player_first_name: string
	player_last_name: string
	player_region_id: number
	player_region_name: string
	player_region_iso_code_short: string
	player_region_iso_code_long: string
	summary_overall_points: number
	summary_overall_rank: number
	summary_event_points: number
	summary_event_rank: number
	squad: ManagerSquad
	current_event: number
	leagues: {
		classic: ClassicLeagueSummary[]
		h2h: H2hLeagueSummary[]
		cup: CupSummary
		cup_matches: []
	}
	name: string
	name_change_blocked: boolean
	kit: null
	last_deadline_bank: number
	last_deadline_value: number
	last_deadline_total_transfers: number
}

type ClassicLeagueSummary = {
	id: number
	name: string
	short_name: string
	created: string
	closed: boolean
	rank: number
	max_entries: number
	league_type: string
	scoring: string
	admin_entry: number | null
	start_event: number
	entry_can_leave: boolean
	entry_can_admin: boolean
	entry_can_invite: boolean
	has_cup: boolean
	cup_league: number | null
	cup_qualified: number | null
	entry_rank: number
	entry_last_rank: number
}

type H2hLeagueSummary = {
	id: number
	name: string
	short_name: null
	created: string
	closed: boolean
	rank: number | null
	max_entries: number | null
	league_type: string
	scoring: string
	admin_entry: number
	start_event: number
	entry_can_leave: boolean
	entry_can_admin: boolean
	entry_can_invite: boolean
	has_cup: boolean
	cup_league: number | null
	cup_qualified: number | null
	entry_rank: number
	entry_last_rank: number
}

type CupSummary = {
	matches: []
	status: {
		qualification_event: number | null
		qualification_numbers: number | null
		qualification_rank: number | null
		qualification_state: string | null
	}
	cup_league: number | null
}
