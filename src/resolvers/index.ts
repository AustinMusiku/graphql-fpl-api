import fetchControllers from '../controllers/fetchControllers'

export default {
	Query: {
		gameweeks: async (_: unknown, { is_finished }) => {
			let gws = await fetchControllers.gameWeeks()
			if (is_finished) {
				gws = gws.filter((gw) => gw.finished == true)
			}
			return gws
		},
		gameweek: async (_: unknown, { id, is_current, is_next }) => {
			const gws = await fetchControllers.gameWeeks()
			if (id) {
				const gw = gws.filter((gw) => gw.id == id)
				return gw[0]
			} else if (is_current) {
				const gw = gws.filter((gw) => gw.is_current == is_current)
				return gw[0]
			} else if (is_next) {
				const gw = gws.filter((gw) => gw.is_next == is_next)
				return gw[0]
			}
		},
		players: async (
			_: unknown,
			{
				by_form,
				by_transfers,
				by_points,
				trim_extras,
				differentials,
				captains,
				premiums,
				mid_rangers,
				budgets,
				first
			}
		) => {
			let players = await fetchControllers.getAllPlayers()
			if (by_form) {
				players = players.sort((a, b) => b.form - a.form)
			}
			if (by_transfers) {
				players = players
					.sort(
						(a, b) =>
							b.transfers_in_event +
							b.transfers_out_event -
							(a.transfers_in_event + a.transfers_out_event)
					)
					.slice(0, 20)
			}
			if (by_points) {
				players = players
					.sort((a, b) => b.total_points - a.total_points)
					.slice(0, 20)
			}
			if (trim_extras) {
				players = players.filter(
					(p) =>
						p.form != 0 &&
						p.minutes > 45 &&
						p.chance_of_playing_next_round != 0
				)
			}
			if (differentials) {
				players = players.filter((p) => p.selected_by_percent < 12)
			}
			if (captains) {
				players = players.filter(
					(p) =>
						p.now_cost > 75 &&
						p.chance_of_playing_next_round != 75 &&
						p.chance_of_playing_next_round != 50 &&
						p.chance_of_playing_next_round != 25
				)
			}
			if (premiums) {
				players = players.filter((p) => p.now_cost > 99)
			}
			if (mid_rangers) {
				players = players.filter(
					(p) => p.now_cost < 99 && p.now_cost > 66
				)
			}
			if (budgets) {
				players = players
					.filter((p) => p.now_cost < 66)
					.sort((a, b) => b.form - a.form)
			}
			if (first) {
				players = players.slice(0, first)
			}
			return players
		},
		player: async (_: unknown, { id }, { loaders }) => {
			const player = await loaders.playerData.load(id)
			return player[0]
		}
	},
	GameWeek: {
		id: (gameweek) => gameweek.id,
		highest_score: (gameweek) => gameweek.highest_score,
		deadline_time: (gameweek) => gameweek.deadline_time,
		finished: (gameweek) => gameweek.finished,
		is_previous: (gameweek) => gameweek.is_previous,
		is_current: (gameweek) => gameweek.is_current,
		is_next: (gameweek) => gameweek.is_next,
		avg_points: (gameweek) => gameweek.avg_points,
		chip_plays: (gameweek) => gameweek.chip_plays
	},
	PastFixture: {
		was_home: (fixture) => fixture.was_home,
		opponent_team: (fixture) => fixture.opponent_team,
		total_points: (fixture) => fixture.total_points,
		team_h_score: (fixture) => fixture.team_h_score,
		team_a_score: (fixture) => fixture.team_a_score,
		round: (fixture) => fixture.round,
		minutes: (fixture) => fixture.minutes,
		goals_scored: (fixture) => fixture.goals_scored,
		assists: (fixture) => fixture.assists,
		clean_sheets: (fixture) => fixture.clean_sheets,
		goals_conceded: (fixture) => fixture.goals_conceded,
		own_goals: (fixture) => fixture.own_goals,
		penalties_saved: (fixture) => fixture.penalties_saved,
		penalties_missed: (fixture) => fixture.penalties_missed,
		yellow_cards: (fixture) => fixture.yellow_cards,
		red_cards: (fixture) => fixture.red_cards,
		saves: (fixture) => fixture.saves,
		bps: (fixture) => fixture.bps,
		value: (fixture) => fixture.value,
		selected: (fixture) => fixture.selected
	},
	Chip: {
		chip_name: (chip) => chip.chip_name,
		num_played: (chip) => chip.num_played
	},
	UpcomingFixture: {
		id: (fixture) => fixture.id,
		event: (fixture) => fixture.event,
		minutes: (fixture) => fixture.minutes,
		difficulty: (fixture) => fixture.difficulty,
		team_h: (fixture) => fixture.team_h,
		team_a: (fixture) => fixture.team_a,
		finished: (fixture) => fixture.finished,
		is_home: (fixture) => fixture.is_home,
		kickoff_time: (fixture) => fixture.kickoff_time
	},
	Player: {
		id: (player) => player.id,
		code: (player) => player.code,
		chance_of_playing_next_round: (player) =>
			player.chance_of_playing_next_round,
		cost_change_event: (player) => player.cost_change_event,
		element_type: (player) => player.element_type,
		event_points: (player) => player.event_points,
		first_name: (player) => player.first_name,
		second_name: (player) => player.second_name,
		web_name: (player) => player.web_name,
		news: (player) => player.news,
		news_added: (player) => player.news_added,
		now_cost: (player) => player.now_cost,
		team: (player) => player.team,
		total_points: (player) => player.total_points,
		transfers_in_event: (player) => player.transfers_in_event,
		transfers_out_event: (player) => player.transfers_out_event,
		minutes: (player) => player.minutes,
		goals_scored: (player) => player.goals_scored,
		assists: (player) => player.assists,
		saves: (player) => player.saves,
		bonus: (player) => player.bonus,
		bps: (player) => player.bps,
		form: (player) => player.form,
		points_per_game: (player) => player.points_per_game,
		selected_by_percent: (player) => player.selected_by_percent,
		influence: (player) => player.influence,
		creativity: (player) => player.creativity,
		threat: (player) => player.threat,
		ict_index: (player) => player.ict_index,
		UpcomingFixtures: async ({ id }, { gw, first, last }, { loaders }) => {
			const playerUpcomingFixtures = loaders.playerEvent.loadMany([id])
			const fixs = await playerUpcomingFixtures

			if (gw) {
				return fixs[0].fixtures.filter((fix) => fix.event == gw)
			}
			if (first && last) {
				return fixs[0].fixtures.filter(
					(fix) => fix.event >= first && fix.event < last
				)
			}

			return fixs[0].fixtures
		},
		pastFixtures: async ({ id }) => {
			const playerEvents = await fetchControllers.getPlayerEventsById(id)
			return playerEvents.history
		}
	}
}
