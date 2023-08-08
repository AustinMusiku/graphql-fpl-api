import {
	QueryGameweekArgs,
	QueryGameweeksArgs,
	QueryPlayerArgs,
	QueryPlayersArgs,
	QueryResolvers
} from '../types/schema'
import fetchController from '../controllers/fetchControllers'

export const Query: QueryResolvers = {
	gameweeks: async (_: unknown, { is_finished }: QueryGameweeksArgs) => {
		let gws = await fetchController.getGameWeeks()
		if (is_finished) {
			gws = gws.filter(({ finished }) => finished === true)
		} else if (!is_finished) {
			gws = gws.filter(({ finished }) => finished === false)
		}
		return gws
	},
	gameweek: async (
		_: unknown,
		{ id, is_current, is_next }: QueryGameweekArgs
	) => {
		const gws = await fetchController.getGameWeeks()
		if (id) {
			return gws.find((gw) => gw.id === id)
		}
		if (is_current) {
			return gws.find(({ is_current }) => is_current === true)
		}
		if (is_next) {
			return gws.find(({ is_next }) => is_next === true)
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
		}: QueryPlayersArgs
	) => {
		let players = await fetchController.getAllPlayers()
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
				({ form, minutes, chance_of_playing_next_round }) =>
					form != 0 &&
					minutes > 45 &&
					chance_of_playing_next_round != 0
			)
		}
		if (differentials) {
			players = players.filter(
				({ selected_by_percent }) => selected_by_percent < 12
			)
		}
		if (captains) {
			players = players.filter(
				({ now_cost, chance_of_playing_next_round }) =>
					now_cost > 75 &&
					chance_of_playing_next_round != 75 &&
					chance_of_playing_next_round != 50 &&
					chance_of_playing_next_round != 25
			)
		}
		if (premiums) {
			players = players.filter(({ now_cost }) => now_cost > 99)
		}
		if (mid_rangers) {
			players = players.filter(
				({ now_cost }) => now_cost < 99 && now_cost > 66
			)
		}
		if (budgets) {
			players = players
				.filter(({ now_cost }) => now_cost < 66)
				.sort((a, b) => b.form - a.form)
		}
		if (first) {
			players = players.slice(0, first)
		}
		return players
	},
	player: async (_: unknown, { id }: QueryPlayerArgs, { loaders }) => {
		const player = await loaders.playerData.load(id)
		return player
	},
	teams: async () => {
		const teams = await fetchController.getTeams()
		return teams
	},
	team: async (_: unknown, { id }: { id: number }, { loaders }) => {
		const teams = await loaders.teamData.load(id)
		return teams
	}
}
