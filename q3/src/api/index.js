import axios from 'axios';

export const requestCategories = () =>
	axios({
		method: 'get',
		url: 'categories',
	});
