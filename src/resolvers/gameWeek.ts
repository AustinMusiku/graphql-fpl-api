export default {
	id: (gameweek) => gameweek.id,
	highest_score: (gameweek) => gameweek.highest_score,
	deadline_time: (gameweek) => gameweek.deadline_time,
	finished: (gameweek) => gameweek.finished,
	is_previous: (gameweek) => gameweek.is_previous,
	is_current: (gameweek) => gameweek.is_current,
	is_next: (gameweek) => gameweek.is_next,
	avg_points: (gameweek) => gameweek.avg_points,
	chip_plays: (gameweek) => gameweek.chip_plays
}
