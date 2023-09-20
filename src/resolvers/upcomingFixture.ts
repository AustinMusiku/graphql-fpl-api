import { UpcomingFixtureResolvers } from '../types/schema'

export const UpcomingFixture: UpcomingFixtureResolvers = {
	code: ({ code }) => code,
	difficulty: ({ difficulty }) => difficulty,
	event: ({ event }) => event,
	finished: ({ finished }) => finished,
	id: ({ id }) => id,
	is_home: ({ is_home }) => is_home,
	kickoff_time: ({ kickoff_time }) => kickoff_time,
	minutes: ({ minutes }) => minutes,
	team_a: async ({ team_a }, _, { loaders }) => {
		return await loaders.teamData.load(team_a)
	},
	team_a_difficulty: ({ team_a_difficulty }) => team_a_difficulty,
	team_h: async ({ team_h }, _, { loaders }) => {
		return await loaders.teamData.load(team_h)
	},
	team_h_difficulty: ({ team_h_difficulty }) => team_h_difficulty,
	finished_provisional: ({ finished_provisional }) => finished_provisional,
	started: ({ started }) => started,
	pulse_id: ({ pulse_id }) => pulse_id
}
