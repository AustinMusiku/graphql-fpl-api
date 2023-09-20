import { PastFixture } from './pastFixture'
import { UpcomingFixture } from './upcomingFixture'

export type Player = {
	id: number
	code: number
	chance_of_playing_next_round: number
	cost_change_event: number
	element_type: number
	event_points: number
	first_name: string
	second_name: string
	web_name: string
	news: string
	news_added: string
	now_cost: number
	team: number
	total_points: number
	transfers_in_event: number
	transfers_out_event: number
	minutes: number
	goals_scored: number
	assists: number
	saves: number
	bonus: number
	bps: number
	form: number
	points_per_game: number
	selected_by_percent: number
	influence: number
	creativity: number
	threat: number
	ict_index: number
	upcoming_fixtures: UpcomingFixture[]
	past_fixtures: PastFixture[]
	chance_of_playing_this_round: number
	cost_change_event_fall: number
	cost_change_start: number
	cost_change_start_fall: number
	dreamteam_count: number
	ep_next: string
	ep_this: string
	in_dreamteam: false
	photo: string
	special: false
	squad_number: null
	status: string
	team_code: number
	transfers_in: number
	transfers_out: number
	value_form: string
	value_season: string
	clean_sheets: number
	goals_conceded: number
	own_goals: number
	penalties_saved: number
	penalties_missed: number
	yellow_cards: number
	red_cards: number
	starts: number
	expected_goals: number
	expected_assists: number
	expected_goal_involvements: number
	expected_goals_conceded: number
	influence_rank: number
	influence_rank_type: number
	creativity_rank: number
	creativity_rank_type: number
	threat_rank: number
	threat_rank_type: number
	ict_index_rank: number
	ict_index_rank_type: number
	corners_and_indirect_freekicks_order: number
	corners_and_indirect_freekicks_text: string
	direct_freekicks_order: number
	direct_freekicks_text: string
	penalties_order: number
	penalties_text: string
	expected_goals_per_90: number
	saves_per_90: number
	expected_assists_per_90: number
	expected_goal_involvements_per_90: number
	expected_goals_conceded_per_90: number
	goals_conceded_per_90: number
	now_cost_rank: number
	now_cost_rank_type: number
	form_rank: number
	form_rank_type: number
	points_per_game_rank: number
	points_per_game_rank_type: number
	selected_rank: number
	selected_rank_type: number
	starts_per_90: number
	clean_sheets_per_90: number
}
