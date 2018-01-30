'use strict';

const request = require('request');
const cheerio = require('cheerio');
const colors = require('colors');
/*
*	TEXT COLORS
*
*	black
*	red
*	green
*	yellow
*	blue
*	magenta
*	cyan
*	white
*	gray
*	grey
*/

module.exports.exec = function () {

	/*
	*	hackerrank Capture The Flag 'Secret Key' solution
	*/
	/*
	const baseUrl = 'https://cdn.hackerrank.com/hackerrank/static/contests/capture-the-flag/secret/';

	let dictionary = ['mars', 'alien'];
	let input = [];
	let news = [];

	function isSecret(word) {
		request(baseUrl + 'secret_json/' + word + '.json', function(error, response, body) {
			// console.log('error:', error);
			// console.log('response:', response);
			// console.log('body:', body);
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
	*/

	/*
	*	hackerrank Capture The Flag 'Infinite Links' solution
	*/
	const baseUrl = 'https://cdn.hackerrank.com/hackerrank/static/contests/capture-the-flag/infinite/';
	let secretPhrases = [];
	let visited = {};

	function getData(htmlFile) {
		const title = htmlFile.split('.')[0];
		if (visited.hasOwnProperty(title)) {
			console.log('pass, this link was checked previously');
		} else {
			visited[title] = true;
			request(baseUrl + htmlFile, function(error, response, body) {
				// console.log('error:', error);
				// console.log('response:', response);
				// console.log('body:', body);
				if (body) {
					const $ = cheerio.load(body);
					// console.log('page title', $('title').html());
					const phrases = $('font');
					for (let i = 0, max = phrases.length; i < max; i++) {
						console.log('phrase:', phrases[i].children[0]);
						if (phrases[i].children[0].children[0].data.indexOf('Secret Phrase') !== -1) {
							secretPhrases.push(phrases[i].children[0].next.data);
						}
					}
					const links = $('a');
					for (let i = 0, max = links.length; i < max; i++) {
						const anch = links[i].attribs.href;
						console.log('anchor:', anch);
						getData(anch);
					}
					secretPhrases.sort();
					console.log(secretPhrases);
				}
			});
		}
	}

	getData('qds.html');
	

	console.log('===');
	console.log('memory usage:', process.memoryUsage());
	console.log('execution time:', process.uptime());
}
