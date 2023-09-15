export type Fixture = {
	code: number
	event: number | null
	finished: boolean
	finished_provisional: boolean
	id: number
	kickoff_time: string | null
	minutes: number
	provisional_start_time: boolean
	started: boolean | null
	team_a: number
	team_a_score: number | null
	team_h: number
	team_h_score: number | null
	stats: FixtureStats[] | []
	team_h_difficulty: number
	team_a_difficulty: number
	pulse_id: number
}

type FixtureStats = {
	identifier: string
	a: ElementStats[] | []
	h: ElementStats[] | []
}

type ElementStats = {
	value: number
	element: number
}
