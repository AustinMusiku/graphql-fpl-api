import { Application } from 'express'
import { createYoga } from 'graphql-yoga'

import schema from '../schema'
import { loaders } from '../loaders'

class Routes {
	public mountYoga(_express: Application): Application {
		const yoga = createYoga({
			schema: schema,
			context: {
				loaders
			}
		})
		return _express.use('/graphql', yoga)
	}
}

export default new Routes()
