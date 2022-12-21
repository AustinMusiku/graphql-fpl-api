import { UpcomingFixtureResolvers } from '../types/schema'

export const UpcomingFixture: UpcomingFixtureResolvers = {
	id: ({ id }) => id,
	event: ({ event }) => event,
	minutes: ({ minutes }) => minutes,
	difficulty: ({ difficulty }) => difficulty,
	team_h: ({ team_h }) => team_h,
	team_a: ({ team_a }) => team_a,
	finished: ({ finished }) => finished,
	is_home: ({ is_home }) => is_home,
	kickoff_time: ({ kickoff_time }) => kickoff_time
}
