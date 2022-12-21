import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema'

import resolvers from '../resolvers'

const schema = loadSchemaSync('./src/typeDefs/*.graphql', {
	loaders: [new GraphQLFileLoader()]
})

const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

export default schemaWithResolvers
