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
					ElementType: '@/models/elementType#ElementType',
					Fixture: '@/models/fixture#Fixture',
					Manager: '@/models/manager#Manager',
					LeagueSummary: '@/models/manager#LeagueSummary',
					ManagerSquad: '@/models/managerSquad#ManagerSquad',
					AutomaticSub: '@/models/managerSquad#AutomaticSub',
					SquadPick: '@/models/managerSquad#SquadPick',
					PastGameweek: '@/models/managerHistory#PastGameweek',
					MangerHistory: '@/models/managerHistory#ManagerHistory',
					GwChip: '@/models/managerHistory#GwChip',
					PastSeason: '@/models/managerHistory#PastSeason',
					ClassicLeague: '@/models/classicLeague#ClassicLeague',
					ClassicLeagueMeta:
						'@/models/classicLeague#ClassicLeagueMeta',
					ClassicLeagueStandings:
						'@/models/classicLeague#ClassicLeagueStandings',
					ClassicLeagueStanding:
						'@/models/classicLeague#ClassicLeagueStanding',
					H2hLeague: '@/models/h2hLeague#H2hLeague',
					H2hLeagueMeta: '@/models/h2hLeague#H2hLeagueMeta',
					H2hLeagueStandings: '@/models/h2hLeague#H2hLeagueStandings',
					H2hLeagueStanding: '@/models/h2hLeague#H2hLeagueStanding',
					NewEntries: '@/models/classicLeague#NewEntries',
					NewEntry: '@/models/classicLeague#NewEntry'
				}
			}
		}
	}
}

export default config
