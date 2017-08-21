
const handleResult = (response) => {
	if (response.status >= 200 && response.status < 300) {
		return response.json().then((data) => {
			console.log(data);
			return data;
		});
	} else if (response.bodyUsed) {
		return response.json().then((data) => {
			const error = new Error(`Response error for ${response.url}`);
			error.additionalData = data;
			throw error;
		});
	}
	throw new Error(`Response error for ${response.url}`);
};

class RecipeApi {
	static getAllRecipes() {
		const db = process.env.NODE_ENV === 'production' ? 'recipes' : 'recipes-test';
		const url = `https://api.mlab.com/api/1/databases/${db}/collections/recipes?apiKey=vtzkXhp1ptUbHzA6FVL_tSbINmUiqyKh`;
		const options = {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};

		return fetch(url, options)
		.then(handleResult);
	}

	static saveRecipe(recipe) {
		const theRecipe = Object.assign({}, recipe); // to avoid manipulating object passed in.
		const db = process.env.NODE_ENV === 'production' ? 'recipes' : 'recipes-test';
		const url = `https://api.mlab.com/api/1/databases/${db}/collections/recipes?apiKey=vtzkXhp1ptUbHzA6FVL_tSbINmUiqyKh`;
		const options = {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(theRecipe),
		};

		return fetch(url, options)
		.then(handleResult);
	}

	static deleteRecipe(recipeId) {
		const db = process.env.NODE_ENV === 'production' ? 'recipes' : 'recipes-test';
		const url = `https://api.mlab.com/api/1/databases/${db}/collections/recipes/${recipeId}?apiKey=vtzkXhp1ptUbHzA6FVL_tSbINmUiqyKh`;
		const options = {
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		};

		return fetch(url, options)
		.then(handleResult);
	}
}

export default RecipeApi;
