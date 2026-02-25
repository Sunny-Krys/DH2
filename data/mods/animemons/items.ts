export const Items: {[itemid: string]: ModdedItemData} = {
        shakujo: {
		name: "Shakujo",
		fling: {
			basePower: 40,
			status: 'par',
		},
		onModifySpAPriority: 1,
		onModifySpA(spa, pokemon) {
			if (pokemon.baseSpecies.baseSpecies === 'Miroku') {
				return this.chainModify(2);
			}
		},
		itemUser: ["Miroku"],
		desc: "If held by Miroku, his Special Attack is doubled.",
		num: -1,
		gen: 9,
	},
}
