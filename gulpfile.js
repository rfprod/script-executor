'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;
let node;

function killProcessByName (name) {
    exec('ps -e | grep '+name, (error, stdout, stderr) => {
        if (error) throw error;
        if (stderr) console.log('stderr: ',stderr);
        if (stdout) {
            console.log('killing running process: ',stdout);
            var runningProcessesIDs = stdout.match(/\d{4,5}/);
            runningProcessesIDs.forEach((id) => {
                exec('kill '+id, (error, stdout, stderr) => {
                    if (error) throw error;
                    if (stdout) console.log('stdout: ',stdout);
                    if (stderr) console.log('stderr: ',stderr);
                });
            });
        }
    });
}

gulp.task('run-script', () => {
    if (node) node.kill();
    node = spawn('node', ['-e','require("./index.js").exec()'], {stdio: 'inherit'});
    node.on('close', (code) => {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
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