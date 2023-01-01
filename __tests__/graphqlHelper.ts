import { graphql } from 'graphql'
import schemaWithResolvers from '../src/schema'
import { loaders } from '../src/loaders'

const graphqlHelper = async (query: string, variables?: any) => {
	return await graphql({
		schema: schemaWithResolvers,
		source: query,
		variableValues: variables,
		contextValue: {
			loaders: loaders
		}
	})
}

export default graphqlHelper
