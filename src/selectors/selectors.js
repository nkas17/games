	export const categoriesFormattedForSelectInput = categories => categories.map(category => {
		return {
			value: category.id,
			text: category.name,
		}
	});
