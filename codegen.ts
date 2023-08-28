import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: './src/typeDefs/*.graphql',
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
					UpcomingFixture: '@/models/upcomingFixture#UpcomingFixture',
					Team: '@/models/team#Team',
					ElementType: '@/models/elementType#ElementType'
				}
			}
		}
	}
}

export default config
