import { FixtureResolvers } from '../types/schema'

export const Fixture: FixtureResolvers = {
	code: ({ code }) => code,
	event: ({ event }) => event,
	finished: ({ finished }) => finished,
	finished_provisional: ({ finished_provisional }) => finished_provisional,
	id: ({ id }) => id,
	kickoff_time: ({ kickoff_time }) => kickoff_time,
	minutes: ({ minutes }) => minutes,
	provisional_start_time: ({ provisional_start_time }) =>
		provisional_start_time,
	pulse_id: ({ pulse_id }) => pulse_id,
	started: ({ started }) => started,
	stats: ({ stats }) => stats,
	team_a: ({ team_a }) => team_a,
	team_a_difficulty: ({ team_a_difficulty }) => team_a_difficulty,
	team_a_score: ({ team_a_score }) => team_a_score,
	team_h: ({ team_h }) => team_h,
	team_h_difficulty: ({ team_h_difficulty }) => team_h_difficulty,
	team_h_score: ({ team_h_score }) => team_h_score
}
