import { Application } from 'express'
import { createYoga } from 'graphql-yoga'

import schema from '../schema'
import { loaders } from '../loaders'

class Routes {
	// default route
	public mountDefault(_express: Application): Application {
		return _express.get('/', (req, res) => {
			// return html page with link to graphql playground
			res.send(`
				<h1>Fplfriend</h1>
				<a href="/graphql">Click here to go to GraphQL Playground</a>
				<p>For more information, visit <a href="https://www.github.com/austinmusiku/fplfriend-api">github repo</a></p>
			`)
		})
	}

	public mountYoga(_express: Application): Application {
		const yoga = createYoga({
			graphiql: true,
			schema: schema,
			context: {
				loaders
			}
		})
		return _express.use('/graphql', yoga)
	}
}

export default new Routes()
