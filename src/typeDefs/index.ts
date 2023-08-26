export const typeDefs = /* GraphQL */ `
	type Query {
		element_types: [ElementType]
		gameweek(id: Int, is_current: Boolean, is_next: Boolean): GameWeek
		gameweeks(is_finished: Boolean): [GameWeek]
		player(id: Int): Player
		players(
			first: Int
			by_form: Boolean
			by_transfers: Boolean
			by_points: Boolean
			trim_extras: Boolean
			differentials: Boolean
			captains: Boolean
			premiums: Boolean
			mid_rangers: Boolean
			budgets: Boolean
		): [Player]
		team(id: Int): Team
		teams: [Team]
	}

	type Chip {
		chip_name: String
		num_played: Int
	}

	type GameWeek {
		avg_points: Int
		chip_plays: [Chip]
		deadline_time: String
		finished: Boolean
		highest_score: Int
		id: Int
		is_current: Boolean
		is_next: Boolean
		is_previous: Boolean
	}

	type PastFixture {
		assists: Int
		bps: Int
		clean_sheets: Int
		goals_conceded: Int
		goals_scored: Int
		minutes: Int
		opponent_team: Int
		own_goals: Int
		penalties_missed: Int
		penalties_saved: Int
		red_cards: Int
		round: Int
		saves: Int
		selected: Int
		team_a_score: Int
		team_h_score: Int
		total_points: Int
		value: Int
		was_home: Boolean
		yellow_cards: Int
	}

	type Player {
		assists: Int
		bonus: Int
		bps: Int
		chance_of_playing_next_round: Int
		chance_of_playing_this_round: Int
		clean_sheets: Int
		code: Int
		cost_change_event: Int
		creativity: Float
		element_type: ElementType
		ep_next: Float
		ep_this: Float
		event_points: Int
		expected_assists: Float
		expected_goal_involvements: Float
		expected_goals: Float
		expected_goals_conceded: Float
		first_name: String
		form: Float
		goals_scored: Int
		ict_index: Float
		id: Int
		influence: Float
		minutes: Int
		news: String
		news_added: String
		now_cost: Float
		pastFixtures: [PastFixture]
		points_per_game: Float
		saves: Int
		second_name: String
		selected_by_percent: Float
		team: Team
		threat: Float
		total_points: Int
		transfers_in_event: Int
		transfers_out_event: Int
		UpcomingFixtures(
			gw: Int
			first: Int
			last: Int
			from: Int
			to: Int
		): [UpcomingFixture]
		web_name: String
	}

	type UpcomingFixture {
		difficulty: Int
		event: Int
		finished: Boolean
		id: Int
		is_home: Boolean
		kickoff_time: String
		minutes: Int
		team_a: Int
		team_h: Int
	}

	type Team {
		code: Int
		draw: Int
		id: Int
		loss: Int
		name: String
		played: Int
		players: [Player]
		points: Int
		position: Int
		pulse_id: Int
		short_name: String
		strength: Int
		strength_attack_away: Int
		strength_attack_home: Int
		strength_defence_away: Int
		strength_defence_home: Int
		strength_overall_away: Int
		strength_overall_home: Int
		win: Int
	}

	type ElementType {
		element_count: Int
		id: Int
		plural_name: String
		plural_name_short: String
		singular_name: String
		singular_name_short: String
		squad_max_play: Int
		squad_min_play: Int
		squad_select: Int
		sub_positions_locked: [Int]
		ui_shirt_specific: Boolean
	}
`
