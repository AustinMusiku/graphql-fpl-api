import { Application } from 'express'
import dataLoader from 'dataloader'
import { createYoga } from 'graphql-yoga'

import schemaWithResolvers from '../schema'
import fetchControllers from '../controllers/fetchControllers'

class Routes {
	public mountYoga(_express: Application): Application {
		const yoga = createYoga({
			schema: schemaWithResolvers,
			context: {
				loaders: {
					playerEvent: new dataLoader(
						async (keys: readonly number[]) => {
							return keys.map(
								fetchControllers.getPlayerEventsById
							)
						}
					),
					playerData: new dataLoader(
						async (keys: readonly number[]) => {
							return keys.map(fetchControllers.getPlayerDataById)
						}
					)
				}
			}
		})
		return _express.use('/graphql', yoga)
	}
}

export default new Routes()
