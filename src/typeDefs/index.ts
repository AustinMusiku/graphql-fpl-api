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
		cost_change_event: Int
		element_type: Int
		event_points: Int
		first_name: String
		second_name: String
		web_name: String
		news: String
		news_added: String
		now_cost: Float
		team: Int
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
`
