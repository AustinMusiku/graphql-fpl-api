import { Application } from 'express'
import { createYoga } from 'graphql-yoga'

import schema from '../schema'
import { loaders } from '../loaders'

class Routes {
	// default route
	public default(_express: Application): Application {
		return _express.get('/', (req, res) => {
			// return html page with link to graphql playground
			res.send(`
				<h1>GraphQL Playground</h1>
				<a href="/graphql">Click here to go to GraphQL Playground</a>
			`)
		})
	}

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
