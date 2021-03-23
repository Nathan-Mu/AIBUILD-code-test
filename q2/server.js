const express = require('express');
const { resortCategories } = require('./resortCategories');

const app = express();
app.use(express.json());
app.get('/categories', (request, response) => {
	response.send({ categories: resortCategories() });
});

app.get('/test', function (req, res) {
	res.send({
		code: 0,
		data: 'hello react test',
	});
});

app.listen(8080);
