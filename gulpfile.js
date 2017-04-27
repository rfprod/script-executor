'use strict';

var gulp = require('gulp');
var spawn = require('child_process').spawn;
var exec = require('child_process').exec;
var node;

function killProcessByName (name) {
	exec('ps -e | grep '+name, (error, stdout, stderr) => {
		if (error) throw error;
		if (stderr) console.log('stderr:', stderr);
		if (stdout) {
			console.log('killing running processes:', stdout);
			var runningProcessesIDs = stdout.match(/\d{4,5}/);
			runningProcessesIDs.forEach((id) => {
				exec('kill -9 ' + id, (error, stdout, stderr) => {
					if (error) throw error;
					if (stderr) console.log('stdout:', stdout);
					if (stdout) console.log('stderr:', stderr);
				});
			});
		}
	});
}

gulp.task('run-script', () => {
	if (node) node.kill();
	node = spawn('node', ['-e', 'require("./index.js").exec()'], {stdio: 'inherit'});
	node.on('close', (code) => {
		if (code === 8) {
			console.log('Error detected, waiting for changes...');
		}
	});
});

gulp.task('watch', () => {
	gulp.watch(['./index.js'], ['run-script']); // watch script changes and execute
});

gulp.task('default', ['run-script','watch']);

process.on('exit', () => {
	if (node) node.kill();
});

process.on('SIGINT', () => {
	killProcessByName('gulp');
});
