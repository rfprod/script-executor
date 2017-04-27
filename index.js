'use strict';

const request = require('request');

module.exports.exec = function () {

	/* hackerrank Capture The Flag 'Secret Key' solution */

	const baseUrl = 'https://cdn.hackerrank.com/hackerrank/static/contests/capture-the-flag/secret/';

	let dictionary = ['mars', 'alien'];
	let input = [];
	let news = [];

	function isSecret(word) {
		request(baseUrl + 'secret_json/' + word + '.json', function(error, response, body) {
			// console.log('error:', error);
			// console.log('response:', response);
			//console.log('body:', body);
			if (body) {
				news.push(JSON.parse(body).news_title);
			}

			if (news.length === input.length) {
				console.log('correct');
				news.sort();
				console.log(news.join('\n'));
			}
		});
	}

	request(baseUrl + 'key.json', function(error, response, body) {
		// console.log('error:', error);
		// console.log('response:', response);
		console.log('body:', JSON.parse(body));

		input = (body) ? Object.keys(JSON.parse(body)) : dictionary;

		for (let word of input) {
			// console.log(word);
			isSecret(word);
		}
	});
	

	console.log('===');
	console.log('memory usage:', process.memoryUsage());
	console.log('execution time:', process.uptime());
}
