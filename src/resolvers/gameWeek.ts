import { GameWeekResolvers } from '../types/schema'

export const GameWeek: GameWeekResolvers = {
	avg_points: ({ average_entry_score }) => average_entry_score,
	chip_plays: ({ chip_plays }) => chip_plays,
	deadline_time: ({ deadline_time }) => deadline_time,
	finished: ({ finished }) => finished,
	highest_score: ({ highest_score }) => highest_score,
	id: ({ id }) => id,
	is_current: ({ is_current }) => is_current,
	is_next: ({ is_next }) => is_next,
	is_previous: ({ is_previous }) => is_previous
}
