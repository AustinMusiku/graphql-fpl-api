import dataLoader from 'dataloader'
import fetchController from '../controllers/fetchControllers'

function loader(controller) {
	new dataLoader(async (keys: readonly number[]) => {
		return keys.map(controller)
	})
}

export const loaders = {
	playerEvent: loader(fetchController.getPlayerEventsById),
	teamUpcomingFixtures: loader(fetchController.getFixturesByTeam),
	playerData: new dataLoader(async (keys: readonly number[]) => {
		return keys.map(async (key) => {
			return await fetchController.getPlayerDataById.call(
				fetchController,
				key
			)
		})
	})
}
