import fetchControllers from '../controllers/fetchControllers'

export default {
	gameweeks: async (_: unknown, { is_finished }) => {
		let gws = await fetchControllers.gameWeeks()
		if (is_finished) {
			gws = gws.filter((gw) => gw.finished == true)
		}
		return gws
	},
	gameweek: async (_: unknown, { id, is_current, is_next }) => {
		const gws = await fetchControllers.gameWeeks()
		if (id) {
			const gw = gws.filter((gw) => gw.id == id)
			return gw[0]
		} else if (is_current) {
			const gw = gws.filter((gw) => gw.is_current == is_current)
			return gw[0]
		} else if (is_next) {
			const gw = gws.filter((gw) => gw.is_next == is_next)
			return gw[0]
		}
	},
	players: async (
		_: unknown,
		{
			by_form,
			by_transfers,
			by_points,
			trim_extras,
			differentials,
			captains,
			premiums,
			mid_rangers,
			budgets,
			first
		}
	) => {
		let players = await fetchControllers.getAllPlayers()
		if (by_form) {
			players = players.sort((a, b) => b.form - a.form)
		}
		if (by_transfers) {
			players = players
				.sort(
					(a, b) =>
						b.transfers_in_event +
						b.transfers_out_event -
						(a.transfers_in_event + a.transfers_out_event)
				)
				.slice(0, 20)
		}
		if (by_points) {
			players = players
				.sort((a, b) => b.total_points - a.total_points)
				.slice(0, 20)
		}
		if (trim_extras) {
			players = players.filter(
				(p) =>
					p.form != 0 &&
					p.minutes > 45 &&
					p.chance_of_playing_next_round != 0
			)
		}
		if (differentials) {
			players = players.filter((p) => p.selected_by_percent < 12)
		}
		if (captains) {
			players = players.filter(
				(p) =>
					p.now_cost > 75 &&
					p.chance_of_playing_next_round != 75 &&
					p.chance_of_playing_next_round != 50 &&
					p.chance_of_playing_next_round != 25
			)
		}
		if (premiums) {
			players = players.filter((p) => p.now_cost > 99)
		}
		if (mid_rangers) {
			players = players.filter((p) => p.now_cost < 99 && p.now_cost > 66)
		}
		if (budgets) {
			players = players
				.filter((p) => p.now_cost < 66)
				.sort((a, b) => b.form - a.form)
		}
		if (first) {
			players = players.slice(0, first)
		}
		return players
	},
	player: async (_: unknown, { id }, { loaders }) => {
		const player = await loaders.playerData.load(id)
		return player[0]
	}
}
