import { PastFixtureResolvers } from '../types/schema'

export const PastFixture: PastFixtureResolvers = {
	assists: ({ assists }) => assists,
	bps: ({ bps }) => bps,
	clean_sheets: ({ clean_sheets }) => clean_sheets,
	goals_scored: ({ goals_scored }) => goals_scored,
	goals_conceded: ({ goals_conceded }) => goals_conceded,
	minutes: ({ minutes }) => minutes,
	opponent_team: async ({ opponent_team }, _, { loaders }) => {
		const teamData = await loaders.teamData.load(opponent_team)
		return teamData
	},
	own_goals: ({ own_goals }) => own_goals,
	penalties_missed: ({ penalties_missed }) => penalties_missed,
	penalties_saved: ({ penalties_saved }) => penalties_saved,
	red_cards: ({ red_cards }) => red_cards,
	round: ({ round }) => round,
	saves: ({ saves }) => saves,
	selected: ({ selected }) => selected,
	team_a_score: ({ team_a_score }) => team_a_score,
	team_h_score: ({ team_h_score }) => team_h_score,
	total_points: ({ total_points }) => total_points,
	value: ({ value }) => value,
	was_home: ({ was_home }) => was_home,
	yellow_cards: ({ yellow_cards }) => yellow_cards
}
