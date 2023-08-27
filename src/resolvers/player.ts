import { PlayerResolvers } from '../types/schema'
import { GraphQLError } from 'graphql'

export const Player: PlayerResolvers = {
	assists: ({ assists }) => assists,

	bonus: ({ bonus }) => bonus,
	bps: ({ bps }) => bps,
	chance_of_playing_next_round: ({ chance_of_playing_next_round }) =>
		chance_of_playing_next_round,
	chance_of_playing_this_round: ({ chance_of_playing_this_round }) =>
		chance_of_playing_this_round,
	clean_sheets: ({ clean_sheets }) => clean_sheets,
	code: ({ code }) => code,
	creativity: ({ creativity }) => creativity,
	cost_change_event: ({ cost_change_event }) => cost_change_event,
	element_type: ({ element_type }, _, { loaders }) => {
		const elementTypeData = loaders.elementTypeData.load(element_type)
		return elementTypeData
	},
	ep_next: ({ ep_next }) => (ep_next ? parseFloat(ep_next) : null),
	ep_this: ({ ep_this }) => (ep_this ? parseFloat(ep_this) : null),
	event_points: ({ event_points }) => event_points,
	expected_assists: ({ expected_assists }) => expected_assists,
	expected_goals: ({ expected_goals }) => expected_goals,
	expected_goals_conceded: ({ expected_goals_conceded }) =>
		expected_goals_conceded,
	expected_goal_involvements: ({ expected_goal_involvements }) =>
		expected_goal_involvements,
	first_name: ({ first_name }) => first_name,
	form: ({ form }) => form,
	goals_scored: ({ goals_scored }) => goals_scored,
	ict_index: ({ ict_index }) => ict_index,
	id: ({ id }) => id,
	influence: ({ influence }) => influence,
	minutes: ({ minutes }) => minutes,
	news: ({ news }) => news,
	news_added: ({ news_added }) => news_added,
	now_cost: ({ now_cost }) => now_cost,
	points_per_game: ({ points_per_game }) => points_per_game,
	pastFixtures: async ({ id }, _, { loaders }) => {
		const playerEvents = await loaders.playerEvent.load(id)
		return playerEvents.history
	},
	second_name: ({ second_name }) => second_name,
	saves: ({ saves }) => saves,
	selected_by_percent: ({ selected_by_percent }) => selected_by_percent,
	total_points: ({ total_points }) => total_points,
	transfers_in_event: ({ transfers_in_event }) => transfers_in_event,
	transfers_out_event: ({ transfers_out_event }) => transfers_out_event,
	threat: ({ threat }) => threat,
	team: async ({ team }, _, { loaders }) => {
		const teamData = await loaders.teamData.load(team)
		return teamData
	},
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
	web_name: ({ web_name }) => web_name
}
