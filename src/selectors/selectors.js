	export const categoriesFormattedForSelectInput = categories => categories.map(category => ({
		value: category.id,
		text: category.name,
	}));
