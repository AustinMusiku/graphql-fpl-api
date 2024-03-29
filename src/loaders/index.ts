import dataLoader from 'dataloader'
import fetchController from '../controllers/fetchControllers'

export const loaders = {
	playerEvent: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getPlayerEvents.call(
				fetchController,
				key
			)
		})
	}),
	teamUpcomingFixtures: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getFixturesByTeam.call(
				fetchController,
				key
			)
		})
	}),
	playerData: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getPlayerDataById.call(
				fetchController,
				key
			)
		})
	}),
	teamData: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getTeamById.call(fetchController, key)
		})
	}),
	teamPlayers: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getPlayersByTeam.call(
				fetchController,
				key
			)
		})
	}),
	elementTypeData: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getElementTypeById.call(
				fetchController,
				key
			)
		})
	}),
	managerData: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getManager.call(fetchController, key)
		})
	}),
	managerHistory: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getManagerHistory.call(
				fetchController,
				key
			)
		})
	}),

	managerSquad: new dataLoader(
		async (keyPairs: readonly [number, number][]) => {
			return keyPairs.map(async (keyPair) => {
				return await fetchController.getManagerSquad.call(
					fetchController,
					...keyPair
				)
			})
		}
	),
	setPieceNotes: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getSetPieceNotesByTeam.call(
				fetchController,
				key
			)
		})
	})
}
