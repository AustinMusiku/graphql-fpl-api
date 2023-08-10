import { ElementTypeResolvers } from '@/types/schema'

export const ElementType: ElementTypeResolvers = {
	id: ({ id }) => id,
	plural_name: ({ plural_name }) => plural_name,
	plural_name_short: ({ plural_name_short }) => plural_name_short,
	singular_name: ({ singular_name }) => singular_name,
	singular_name_short: ({ singular_name_short }) => singular_name_short,
	squad_select: ({ squad_select }) => squad_select,
	squad_min_play: ({ squad_min_play }) => squad_min_play,
	squad_max_play: ({ squad_max_play }) => squad_max_play,
	ui_shirt_specific: ({ ui_shirt_specific }) => ui_shirt_specific,
	sub_positions_locked: ({ sub_positions_locked }) => sub_positions_locked,
	element_count: ({ element_count }) => element_count
}
