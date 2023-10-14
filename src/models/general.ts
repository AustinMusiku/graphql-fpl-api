import { ElementType } from './elementType'
import { GameWeek } from './gameWeek'
import { Player } from './player'
import { Team } from './team'

export type General = {
	elements: Player[]
	events: GameWeek[]
	teams: Team[]
	element_types: ElementType[]
	total_players: number
	element_stats: unknown[]
	game_settings: unknown[]
	phases: unknown[]
}
