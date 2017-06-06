import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const recipes = [
	{
		id: 'quiche',
		title: 'quiche',
		category: 'other',
		description: 'Delicious Spinach Quiche and Ham & Cauliflower quiche',
		ingredients: [
			{
				id: 'cheese',
				quantity: '8',
				unit: 'oz',
			},
			{
				id: 'pie-crust',
				quantity: '2',
				unit: '',
			},
			{
				id: 'egg',
				quantity: '7',
				unit: '',
			},
		],
	},
	{
		id: 'tacos',
		title: 'tacos',
		category: 'other',
		description: 'Tasty homemade tacos - hard or soft',
		ingredients: [
			{
				id: 'cheese',
				quantity: '8',
				unit: 'oz',
			},
			{
				id: 'ground beef',
				quantity: '1.5',
				unit: 'lbs',
			},
			{
				id: 'tortilla',
				quantity: '1',
				unit: '',
			},
		],
	},
];

const ingredients = [ // eslint-disable-line
	{
		id: 'cheese',
		name: 'cheese',
		category: 'dairy',
	},
	{
		id: 'pie-crust',
		name: 'pie crust',
		category: 'frozen',
	},
	{
		id: 'egg',
		name: 'egg',
		category: 'dairy',
	},
];

const replaceAll = (str, find, replace) => str.replace(new RegExp(find, 'g'), replace);

// This would be performed on the server in a real app. Just stubbing in.
const generateId = recipe => replaceAll(recipe.title, ' ', '-');

class RecipeApi {
	static getAllRecipes() {
		return new Promise((resolve /* reject*/) => {
			setTimeout(() => {
				resolve(Object.assign([], recipes));
			}, delay);
		});
	}

	static saveRecipe(recipe) {
		const theRecipe = Object.assign({}, recipe); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
        // Simulate server-side validation
				const minRecipeTitleLength = 1;
				if (theRecipe.title.length < minRecipeTitleLength) {
					reject(`Title must be at least ${minRecipeTitleLength} characters.`);
				}

				if (theRecipe.id) {
					const existingRecipeIndex = recipes.findIndex(a => a.id === theRecipe.id);
					recipes.splice(existingRecipeIndex, 1, theRecipe);
				} else {
          // Just simulating creation here.
          // The server would generate ids and watchHref's for new courses in a real app.
          // Cloning so copy returned is passed by value rather than by reference.
					theRecipe.id = generateId(theRecipe);
					// recipe.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
					recipes.push(theRecipe);
				}

				resolve(theRecipe);
			}, delay);
		});
	}

	static deleteRecipe(recipeId) {
		return new Promise((resolve /* reject*/) => {
			setTimeout(() => {
				const indexOfRecipeToDelete = recipes.findIndex(recipe => recipe.id === recipeId);
				recipes.splice(indexOfRecipeToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default RecipeApi;
