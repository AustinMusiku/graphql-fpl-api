import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: './src/typeDefs/*.graphql',
	generates: {
		'src/types/schema.d.ts': {
			plugins: ['typescript', 'typescript-resolvers'],
			config: {
				mappers: {
					GameWeek: '../models/gameWeek',
					Chip: '../models/chip',
					Player: '../models/player',
					PastFixture: '../models/pastFixture',
					UpcomingFixture: '../models/upcomingFixture'
				}
			}
		}
	}
}

export default config
