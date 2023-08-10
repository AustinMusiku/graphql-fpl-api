export const typeDefs = /* GraphQL */ `
	type Query {
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
		gameweek(id: Int, is_current: Boolean, is_next: Boolean): GameWeek
		gameweeks(is_finished: Boolean): [GameWeek]
		team(id: Int): Team
		teams: [Team]
		element_types: [ElementType]
	}

	type Chip {
		chip_name: String
		num_played: Int
	}

	type GameWeek {
		id: Int
		highest_score: Int
		deadline_time: String
		finished: Boolean
		is_previous: Boolean
		is_current: Boolean
		is_next: Boolean
		avg_points: Int
		chip_plays: [Chip]
	}

	type PastFixture {
		was_home: Boolean
		opponent_team: Int
		total_points: Int
		team_h_score: Int
		team_a_score: Int
		round: Int
		minutes: Int
		goals_scored: Int
		assists: Int
		clean_sheets: Int
		goals_conceded: Int
		own_goals: Int
		penalties_saved: Int
		penalties_missed: Int
		yellow_cards: Int
		red_cards: Int
		saves: Int
		bps: Int
		value: Int
		selected: Int
	}

	type Player {
		id: Int
		code: Int
		chance_of_playing_next_round: Int
		chance_of_playing_this_round: Int
		cost_change_event: Int
		element_type: Int
		event_points: Int
		first_name: String
		second_name: String
		web_name: String
		news: String
		news_added: String
		now_cost: Float
		team: Team
		total_points: Int
		transfers_in_event: Int
		transfers_out_event: Int
		minutes: Int
		goals_scored: Int
		assists: Int
		saves: Int
		bonus: Int
		bps: Int
		form: Float
		points_per_game: Float
		selected_by_percent: Float
		influence: Float
		creativity: Float
		threat: Float
		ict_index: Float
		expected_goals: Float
		expected_assists: Float
		expected_goal_involvements: Float
		expected_goals_conceded: Float
		ep_next: Float
		ep_this: Float
		UpcomingFixtures(
			gw: Int
			first: Int
			last: Int
			from: Int
			to: Int
		): [UpcomingFixture]
		pastFixtures: [PastFixture]
	}

	type UpcomingFixture {
		id: Int
		event: Int
		minutes: Int
		difficulty: Int
		team_h: Int
		team_a: Int
		finished: Boolean
		is_home: Boolean
		kickoff_time: String
	}

	type Team {
		code: Int
		draw: Int
		id: Int
		loss: Int
		name: String
		played: Int
		points: Int
		position: Int
		short_name: String
		strength: Int
		win: Int
		strength_overall_home: Int
		strength_overall_away: Int
		strength_attack_home: Int
		strength_attack_away: Int
		strength_defence_home: Int
		strength_defence_away: Int
		pulse_id: Int
		players: [Player]
	}

	type ElementType {
		id: Int
		plural_name: String
		plural_name_short: String
		singular_name: String
		singular_name_short: String
		squad_select: Int
		squad_min_play: Int
		squad_max_play: Int
		ui_shirt_specific: Boolean
		sub_positions_locked: [Int]
		element_count: Int
	}
`
