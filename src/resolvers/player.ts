import fetchControllers from '../controllers/fetchControllers'

export default {
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
