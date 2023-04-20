import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: './src/typeDefs/*.ts',
	generates: {
		'src/types/schema.ts': {
			plugins: ['typescript', 'typescript-resolvers'],
			config: {
				mapperTypeSuffix: 'Model',
				mappers: {
					GameWeek: '@/models/gameWeek#GameWeek',
					Chip: '@/models/chip#Chip',
					Player: '@/models/player#Player',
					PastFixture: '@/models/pastFixture#PastFixture',
					UpcomingFixture: '@/models/upcomingFixture#UpcomingFixture'
				}
			}
		}
	}
}

export default config
