import { Application } from 'express'
import dataLoader from 'dataloader'
import { createYoga } from 'graphql-yoga'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'

// import Schema from '../schema';
import fetchMethods from '../controllers/fetchControllers'

const typeDefs = loadSchemaSync('./src/schema/typeDefs/*.graphql', {
	loaders: [new GraphQLFileLoader()]
})

const yoga = createYoga({
	schema: typeDefs,
	context: {
		loaders: {
			playerEvent: new dataLoader(async (keys: readonly number[]) => {
				return keys.map(fetchMethods.getPlayerEventsById)
			}),
			playerData: new dataLoader(async (keys: readonly number[]) => {
				return keys.map(fetchMethods.getPlayerDataById)
			})
		}
	}
})

class Routes {
	public mountGraphQL(_express: Application): Application {
		return _express.use('/graphql', yoga)
	}
}

export default new Routes()
