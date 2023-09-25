import { Query } from './query'
import { Chip } from './chip'
import { Player } from './player'
import { GameWeek } from './gameWeek'
import { PastFixture } from './pastFixture'
import { UpcomingFixture } from './upcomingFixture'
import { Team } from './team'
import { ElementType } from './elementType'
import { Fixture } from './fixture'
import { Manager } from './manager'
import { LeagueSummary } from './leagueSummary'
import { ManagerSquad } from './managerSquad'
import { AutomaticSub } from './automaticSub'
import { SquadPick } from './squadPick'
import { PastGameweek } from './pastGameweek'
import { ManagerHistory } from './managerHistory'
import { ManagerHistoryChips } from './managerHistoryChips'
import { ManagerHistoryPastSeason } from './managerHistoryPastSeason'
import * as ClassicLeague from './classicLeague'
import * as H2hLeague from './h2hLeague'

export default {
	Query,
	Chip,
	Player,
	GameWeek,
	PastFixture,
	UpcomingFixture,
	Team,
	ElementType,
	Fixture,
	Manager,
	LeagueSummary,
	ManagerSquad,
	AutomaticSub,
	SquadPick,
	PastGameweek,
	ManagerHistory,
	ManagerHistoryChips,
	ManagerHistoryPastSeason,
	...ClassicLeague,
	...H2hLeague
}
