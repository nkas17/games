import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const categories = [
	{
		"id":"other",
		"name": "other",
	}, 
	{
		"id":"poultry",
		"name":"poultry"
	}, 
	{
		"id":"beef",
		"name": "beef",
	},
];

class CategoryApi {
	static getAllCategories() {
		return new Promise((resolve /*reject*/) => {
			setTimeout(() => {
				resolve(Object.assign([], categories));
			}, delay);
		});
	}
}


export default CategoryApi;
