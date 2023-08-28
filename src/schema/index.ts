import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadSchemaSync } from '@graphql-tools/load'
import { addResolversToSchema } from '@graphql-tools/schema'
import resolvers from '../resolvers'

// Load typedefs from the file
const schema = loadSchemaSync('**/*.graphql', {
	loaders: [new GraphQLFileLoader()]
})

// Add resolvers to the schema
const schemaWithResolvers = addResolversToSchema({ schema, resolvers })

export default schemaWithResolvers
