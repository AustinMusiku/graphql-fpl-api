import dataLoader from 'dataloader'
import {
	getPlayerEventsById,
	getPlayerDataById,
	getFixturesByTeam
} from '../controllers/fetchControllers'

const loader = (controller) =>
	new dataLoader(async (keys: readonly number[]) => {
		return keys.map(controller)
	})

export const loaders = {
	playerEvent: loader(getPlayerEventsById),
	playerData: loader(getPlayerDataById),
	teamUpcomingFixtures: loader(getFixturesByTeam)
}
