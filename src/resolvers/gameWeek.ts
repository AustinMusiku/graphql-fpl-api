import { GameWeekResolvers } from '../types/schema'

export const GameWeek: GameWeekResolvers = {
	id: ({ id }) => id,
	highest_score: ({ highest_score }) => highest_score,
	deadline_time: ({ deadline_time }) => deadline_time,
	finished: ({ finished }) => finished,
	is_previous: ({ is_previous }) => is_previous,
	is_current: ({ is_current }) => is_current,
	is_next: ({ is_next }) => is_next,
	avg_points: ({ average_entry_score }) => average_entry_score,
	chip_plays: ({ chip_plays }) => chip_plays
}
