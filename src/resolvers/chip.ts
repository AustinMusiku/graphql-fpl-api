import { ChipResolvers } from '../types/schema'

export const Chip: ChipResolvers = {
	chip_name: ({ chip_name }) => chip_name,
	num_played: ({ num_played }) => num_played
}
