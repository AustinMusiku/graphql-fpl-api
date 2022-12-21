import { Application } from 'express'
import { createYoga } from 'graphql-yoga'

import schemaWithResolvers from '../schema'
import { loaders } from '../loaders'

class Routes {
	public mountYoga(_express: Application): Application {
		const yoga = createYoga({
			schema: schemaWithResolvers,
			context: {
				loaders
			}
		})
		return _express.use('/graphql', yoga)
	}
}

export default new Routes()
