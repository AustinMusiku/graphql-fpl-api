import { UpcomingFixtureResolvers } from '../types/schema'

export const UpcomingFixture: UpcomingFixtureResolvers = {
	difficulty: ({ difficulty }) => difficulty,
	event: ({ event }) => event,
	finished: ({ finished }) => finished,
	id: ({ id }) => id,
	is_home: ({ is_home }) => is_home,
	kickoff_time: ({ kickoff_time }) => kickoff_time,
	minutes: ({ minutes }) => minutes,
	team_a: ({ team_a }) => team_a,
	team_h: ({ team_h }) => team_h
}
