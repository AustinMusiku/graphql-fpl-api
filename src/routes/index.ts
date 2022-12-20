import { Application } from 'express';
import { createSchema, createYoga } from 'graphql-yoga';

const graphQLServer = createSchema({
	typeDefs: `
	  type Query {
		hello: String
	  }
	`,
	resolvers: {
	  Query: {
		hello: () => 'world'
	  }
	}
})

const yoga = createYoga({
	schema: graphQLServer
})

class Routes {
	public mountGraphQL(_express: Application): Application {
		return _express.use('/graphql', yoga);
	}
}

export default new Routes;

