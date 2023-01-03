import dataLoader from 'dataloader'
import fetchController from '../controllers/fetchControllers'

export const loaders = {
	playerEvent: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getPlayerEventsById.call(
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
	})
}
