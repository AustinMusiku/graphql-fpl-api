import { Query } from './query'
import { Chip } from './chip'
import { Player } from './player'
import { GameWeek } from './gameWeek'
import { PastFixture } from './pastFixture'
import { UpcomingFixture } from './upcomingFixture'
import { Team } from './team'
import { ElementType } from './elementType'
import { Fixture } from './fixture'
import * as Manager from './manager'
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
	...Manager,
	...ClassicLeague,
	...H2hLeague
}
