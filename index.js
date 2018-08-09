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
	*
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
	*
	*/

/*
*	ENTRANTS test #1
*/

	var obj = {
		a: 1,
		b: {
			x: 2,
			y: 3
		},
		c: {
			z: {
				q: 4
			}
		}
	};

	Object.prototype.random = function() {
		console.log('Object.prototype.random', this);
		const rootKeys = Object.keys(this);
		const rootObject = this;
		const values = [];
		/*
		*	extract values recursively
		*/
		const extractValues = (keys, root) => {
			for (const key of keys) {
				// console.log(key);
				const value = root[key];
				if (typeof value === 'object') {
					const newRoot = value;
					const newRootKeys = Object.keys(newRoot);
					extractValues(newRootKeys, newRoot);
				} else {
					values.push(value);
				}
			}
		}
		extractValues(rootKeys, rootObject);
		console.log('values', JSON.stringify(values));
		/*
		*	randomize
		*/
		const getRandom = (min, max) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
		const random = getRandom(0, values.length - 1);
		/*
		*	return random value
		*/
		return values[random];
	};

	Object.prototype.toRandomArray = function() {
		console.log('Object.prototype.toRandomArray', this);
		const rootKeys = Object.keys(this);
		const rootObject = this;
		const values = [];
		/*
		*	extract values recursively
		*/
		const extractValues = (keys, root) => {
			for (const key of keys) {
				// console.log(key);
				const value = root[key];
				if (typeof value === 'object') {
					const newRoot = value;
					const newRootKeys = Object.keys(newRoot);
					extractValues(newRootKeys, newRoot);
				} else {
					values.push(value);
				}
			}
		}
		extractValues(rootKeys, rootObject);
		console.log('values', JSON.stringify(values));
		/*
		*	get permutations: http://homepage.math.uiowa.edu/~goodman/22m150.dir/2007/Permutation%20Generation%20Methods.pdf
		*/
		const permute = (input) => {
			let length = input.length,
				result = [input.slice()],
				c = new Array(length).fill(0),
				i = 1, k, p;
			while (i < length) {
				if (c[i] < i) {
					k = i % 2 && c[i];
					p = input[i];
					input[i] = input[k];
					input[k] = p;
					c[i]++;
					i = 1;
					result.push(input.slice());
				} else {
					c[i] = 0;
					i++;
				}
			}
			return result;
		}
		const permutations = permute(values);
		console.log('permutations', JSON.stringify(permutations));
		/*
		*	randomize
		*/
		const getRandom = (min, max) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};
		const random = getRandom(0, permutations.length - 1);
		/*
		*	return random premutation
		*/
		return permutations[random];
	};

	// TEST 1 - should return random object value
	const objRandom = obj.random();
	console.log('objRandom', objRandom);
	if (/[1-4]/.test(objRandom)) {
		console.log('TEST 1: obj.random() : CORRECT'.green);
	} else {
		console.log('TEST 1: obj.random() : INCORRECT'.red);
	}
	// TEST 2 - should return random values array permutation
	const randomArray = obj.toRandomArray();
	console.log('randomArray', randomArray);
	if (randomArray.includes(1) && randomArray.includes(2) && randomArray.includes(3) && randomArray.includes(4)) {
		console.log('TEST 1: obj.toRandomArray() : CORRECT'.green);
	} else {
		console.log('TEST 1: obj.toRandomArray() : INCORRECT'.red);
	}

	// TEST 1.1 - shound return undefined
	obj = {};
	const objRandom_1 = obj.random();
	if (typeof objRandom_1 === 'undefined') {
		console.log('TEST 1.1: obj.random() : CORRECT'.green);
	} else {
		console.log('TEST 1.1: obj.random() : INCORRECT'.red);
	}
	// TEST 2.1 - should return an empty array
	const randomArray_1 = obj.toRandomArray();
	if (Array.isArray(randomArray_1) && !randomArray_1.length) {
		console.log('TEST 1.1: obj.toRandomArray() : CORRECT'.green);
	} else {
		console.log('TEST 1.1: obj.toRandomArray() : INCORRECT'.red);
	}

	console.log('===');
	console.log('memory usage:', process.memoryUsage());
	console.log('execution time:', process.uptime());
};
