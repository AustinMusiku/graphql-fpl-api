import { ElementTypeResolvers } from '@/types/schema'

export const ElementType: ElementTypeResolvers = {
	element_count: ({ element_count }) => element_count,
	id: ({ id }) => id,
	plural_name: ({ plural_name }) => plural_name,
	plural_name_short: ({ plural_name_short }) => plural_name_short,
	singular_name: ({ singular_name }) => singular_name,
	singular_name_short: ({ singular_name_short }) => singular_name_short,
	squad_max_play: ({ squad_max_play }) => squad_max_play,
	squad_min_play: ({ squad_min_play }) => squad_min_play,
	squad_select: ({ squad_select }) => squad_select,
	sub_positions_locked: ({ sub_positions_locked }) => sub_positions_locked,
	ui_shirt_specific: ({ ui_shirt_specific }) => ui_shirt_specific
}
