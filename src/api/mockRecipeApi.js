import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const recipes = [
	{
		id: "quiche",
		title: "Quiche",
		category: "other",
		description: "Delicious Spinach Quiche and Ham & Cauliflower quiche",
		ingredients: [
			{
				id: "cheese",
				quantity: "8",
				unit: "oz",
			},
			{
				id: "pie-crust",
				quantity: "2",
				unit: "",
			},
			{
				id: "egg",
				quantity: "7",
				unit: ""
			}
		]
	}
];

const ingredients = [
	{
		id: "cheese",
		name: "cheese",
		category: "dairy"
	},
	{
		id: "pie-crust",
		name: "pie crust",
		category: "frozen"
	},
	{
		id: "egg",
		name: "egg",
		category: "dairy"
	}
];

function replaceAll(str, find, replace) {
	return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
	return replaceAll(course.title, ' ', '-');
};

class CourseApi {
	static getAllCourses() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], courses));
			}, delay);
		});
	}

	static saveCourse(course) {
		course = Object.assign({}, course); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
        // Simulate server-side validation
				const minCourseTitleLength = 1;
				if (course.title.length < minCourseTitleLength) {
					reject(`Title must be at least ${minCourseTitleLength} characters.`);
				}

				if (course.id) {
					const existingCourseIndex = courses.findIndex(a => a.id == course.id);
					courses.splice(existingCourseIndex, 1, course);
				} else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
					course.id = generateId(course);
					course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
					courses.push(course);
				}

				resolve(course);
			}, delay);
		});
	}

	static deleteCourse(courseId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfCourseToDelete = courses.findIndex(course => {
					course.id == courseId;
				});
				courses.splice(indexOfCourseToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default CourseApi;
