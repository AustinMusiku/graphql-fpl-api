import { readFileSync } from 'fs'
import { join } from 'path'
import { createSchema } from 'graphql-yoga'
import resolvers from '../resolvers'

const schema = createSchema({
	typeDefs: readFileSync(
		join(__dirname, '../typeDefs/index.graphql'),
		'utf8'
	),
	resolvers
})

export default schema
