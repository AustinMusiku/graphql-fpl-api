import { PlayerResolvers } from '../types/schema'
import { GraphQLError } from 'graphql'

export const Player: PlayerResolvers = {
	id: ({ id }) => id,
	code: ({ code }) => code,
	chance_of_playing_next_round: ({ chance_of_playing_next_round }) =>
		chance_of_playing_next_round,
	cost_change_event: ({ cost_change_event }) => cost_change_event,
	element_type: ({ element_type }) => element_type,
	event_points: ({ event_points }) => event_points,
	first_name: ({ first_name }) => first_name,
	second_name: ({ second_name }) => second_name,
	web_name: ({ web_name }) => web_name,
	news: ({ news }) => news,
	news_added: ({ news_added }) => news_added,
	now_cost: ({ now_cost }) => now_cost,
	team: ({ team }) => team,
	total_points: ({ total_points }) => total_points,
	transfers_in_event: ({ transfers_in_event }) => transfers_in_event,
	transfers_out_event: ({ transfers_out_event }) => transfers_out_event,
	minutes: ({ minutes }) => minutes,
	goals_scored: ({ goals_scored }) => goals_scored,
	assists: ({ assists }) => assists,
	saves: ({ saves }) => saves,
	bonus: ({ bonus }) => bonus,
	bps: ({ bps }) => bps,
	form: ({ form }) => form,
	points_per_game: ({ points_per_game }) => points_per_game,
	selected_by_percent: ({ selected_by_percent }) => selected_by_percent,
	influence: ({ influence }) => influence,
	creativity: ({ creativity }) => creativity,
	threat: ({ threat }) => threat,
	ict_index: ({ ict_index }) => ict_index,
	expected_goals: ({ expected_goals }) => expected_goals,
	expected_assists: ({ expected_assists }) => expected_assists,
	expected_goal_involvements: ({ expected_goal_involvements }) =>
		expected_goal_involvements,
	expected_goals_conceded: ({ expected_goals_conceded }) =>
		expected_goals_conceded,
	UpcomingFixtures: async (
		{ team },
		{ gw, first, last, from, to },
		{ loaders }
	) => {
		const playerUpcomingFixtures = loaders.teamUpcomingFixtures.load(team)
		const fixtures = await playerUpcomingFixtures

		if (gw) {
			return fixtures.filter(({ event }) => event === gw)
		}
		if (first) {
			return fixtures.slice(0, first)
		}
		if (last) {
			return fixtures.slice(-last)
		}
		if (from || to) {
			if (from > to) {
				return new GraphQLError('from must be less than to')
			}
			if (!to) {
				return fixtures.filter(({ event }) => event >= from)
			}
			if (!from) {
				return fixtures.filter(({ event }) => event <= to)
			}
			return fixtures.filter(({ event }) => event >= from && event <= to)
		}

		return fixtures
	},
	pastFixtures: async ({ id }, _, { loaders }) => {
		const playerEvents = await loaders.playerEvent.load(id)
		return playerEvents.history
	}
}
