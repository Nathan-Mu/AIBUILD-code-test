const axios = require('axios');

const run = () => {
	fetchCategories();
};

const fetchCategories = async () => {
	try {
		const response = await requestCategories();
		const { categories } = response.data;
		console.log(categories);
	} catch (e) {
		console.log('Fetch categories failed');
	}
};

const requestCategories = () =>
	axios({
		method: 'get',
		url: 'http://localhost:8080/categories',
	});

run();
