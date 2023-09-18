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
	clean_sheets_per_90: ({ clean_sheets_per_90 }) => clean_sheets_per_90,
	code: ({ code }) => code,
	corners_and_indirect_freekicks_order: ({
		corners_and_indirect_freekicks_order
	}) => corners_and_indirect_freekicks_order,
	corners_and_indirect_freekicks_text: ({
		corners_and_indirect_freekicks_text
	}) => corners_and_indirect_freekicks_text,
	cost_change_event: ({ cost_change_event }) => cost_change_event,
	cost_change_event_fall: ({ cost_change_event_fall }) =>
		cost_change_event_fall,
	cost_change_start: ({ cost_change_start }) => cost_change_start,
	cost_change_start_fall: ({ cost_change_start_fall }) =>
		cost_change_start_fall,
	creativity: ({ creativity }) => creativity,
	creativity_rank: ({ creativity_rank }) => creativity_rank,
	creativity_rank_type: ({ creativity_rank_type }) => creativity_rank_type,
	direct_freekicks_order: ({ direct_freekicks_order }) =>
		direct_freekicks_order,
	direct_freekicks_text: ({ direct_freekicks_text }) => direct_freekicks_text,
	dreamteam_count: ({ dreamteam_count }) => dreamteam_count,
	element_type: ({ element_type }, _, { loaders }) => {
		const elementTypeData = loaders.elementTypeData.load(element_type)
		return elementTypeData
	},
	ep_next: ({ ep_next }) => (ep_next ? parseFloat(ep_next) : null),
	ep_this: ({ ep_this }) => (ep_this ? parseFloat(ep_this) : null),
	event_points: ({ event_points }) => event_points,
	expected_assists: ({ expected_assists }) => expected_assists,
	expected_assists_per_90: ({ expected_assists_per_90 }) =>
		expected_assists_per_90,
	expected_goal_involvements: ({ expected_goal_involvements }) =>
		expected_goal_involvements,
	expected_goal_involvements_per_90: ({
		expected_goal_involvements_per_90
	}) => expected_goal_involvements_per_90,
	expected_goals: ({ expected_goals }) => expected_goals,
	expected_goals_conceded: ({ expected_goals_conceded }) =>
		expected_goals_conceded,
	expected_goals_conceded_per_90: ({ expected_goals_conceded_per_90 }) =>
		expected_goals_conceded_per_90,
	expected_goals_per_90: ({ expected_goals_per_90 }) => expected_goals_per_90,
	first_name: ({ first_name }) => first_name,
	form: ({ form }) => form,
	form_rank: ({ form_rank }) => form_rank,
	form_rank_type: ({ form_rank_type }) => form_rank_type,
	goals_conceded: ({ goals_conceded }) => goals_conceded,
	goals_conceded_per_90: ({ goals_conceded_per_90 }) => goals_conceded_per_90,
	goals_scored: ({ goals_scored }) => goals_scored,
	ict_index: ({ ict_index }) => ict_index,
	ict_index_rank: ({ ict_index_rank }) => ict_index_rank,
	ict_index_rank_type: ({ ict_index_rank_type }) => ict_index_rank_type,
	id: ({ id }) => id,
	in_dreamteam: ({ in_dreamteam }) => in_dreamteam,
	influence: ({ influence }) => influence,
	influence_rank: ({ influence_rank }) => influence_rank,
	influence_rank_type: ({ influence_rank_type }) => influence_rank_type,
	minutes: ({ minutes }) => minutes,
	news: ({ news }) => news,
	news_added: ({ news_added }) => news_added,
	now_cost: ({ now_cost }) => now_cost,
	now_cost_rank: ({ now_cost_rank }) => now_cost_rank,
	now_cost_rank_type: ({ now_cost_rank_type }) => now_cost_rank_type,
	own_goals: ({ own_goals }) => own_goals,
	past_fixtures: async ({ id }, _, { loaders }) => {
		const playerEvents = await loaders.playerEvent.load(id)
		return playerEvents.history
	},
	penalties_missed: ({ penalties_missed }) => penalties_missed,
	penalties_order: ({ penalties_order }) => penalties_order,
	penalties_saved: ({ penalties_saved }) => penalties_saved,
	penalties_text: ({ penalties_text }) => penalties_text,
	photo: ({ photo }) => photo,
	points_per_game: ({ points_per_game }) => points_per_game,
	points_per_game_rank: ({ points_per_game_rank }) => points_per_game_rank,
	points_per_game_rank_type: ({ points_per_game_rank_type }) =>
		points_per_game_rank_type,
	red_cards: ({ red_cards }) => red_cards,
	saves: ({ saves }) => saves,
	saves_per_90: ({ saves_per_90 }) => saves_per_90,
	second_name: ({ second_name }) => second_name,
	selected_by_percent: ({ selected_by_percent }) => selected_by_percent,
	selected_rank: ({ selected_rank }) => selected_rank,
	selected_rank_type: ({ selected_rank_type }) => selected_rank_type,
	special: ({ special }) => special,
	squad_number: ({ squad_number }) => squad_number,
	starts: ({ starts }) => starts,
	starts_per_90: ({ starts_per_90 }) => starts_per_90,
	status: ({ status }) => status,
	team: async ({ team }, _, { loaders }) => {
		const teamData = await loaders.teamData.load(team)
		return teamData
	},
	team_code: ({ team_code }) => team_code,
	threat: ({ threat }) => threat,
	threat_rank: ({ threat_rank }) => threat_rank,
	threat_rank_type: ({ threat_rank_type }) => threat_rank_type,
	total_points: ({ total_points }) => total_points,
	transfers_in: ({ transfers_in }) => transfers_in,
	transfers_in_event: ({ transfers_in_event }) => transfers_in_event,
	transfers_out: ({ transfers_out }) => transfers_out,
	transfers_out_event: ({ transfers_out_event }) => transfers_out_event,
	upcoming_fixtures: async (
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
	value_form: ({ value_form }) => value_form,
	value_season: ({ value_season }) => value_season,
	web_name: ({ web_name }) => web_name,
	yellow_cards: ({ yellow_cards }) => yellow_cards
}
