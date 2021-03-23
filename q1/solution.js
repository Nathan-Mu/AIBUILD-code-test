//assumption: only using https protocol
//time used: 24mins
const https = require('https');

let getResponse = uri => {
	return new Promise((resolve, reject) => {
		const start = new Date();
		let request = https
			.get(uri, _ => {
				const end = new Date();
				const duration = end - start;
				if (duration < 500) resolve('good');
				else resolve('fine');
			})
			.setTimeout(5000, () => {
				resolve('terrible');
				request.destroy();
			})
			.on('error', error => reject(error));
	});
};

let run = async uri => {
	try {
		let status = await getResponse(uri);
		console.log(status);
		return status;
	} catch (error) {
		console.log('Incorrect URI');
	}
};

run('https://www.google.com');
