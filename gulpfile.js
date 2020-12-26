'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;

let node;
let tsc;

gulp.task('run-js-script', done => {
  if (node) node.kill();
  node = spawn('node', ['-e', 'require("./index.js").exec()'], {
    stdio: 'inherit',
  });
  node.on('close', code => {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    } else {
      done();
    }
  });
});

gulp.task('tsc', done => {
  if (tsc) tsc.kill();
  tsc = spawn('tsc', [], { stdio: 'inherit' });
  tsc.on('close', code => {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    } else {
      done();
    }
  });
});

gulp.task('run-ts-script', () => {
  if (node) node.kill();
  node = spawn('node', ['-e', 'new require("./ts/index.js").TestModule.TestTask()'], {
    stdio: 'inherit',
  });
  node.on('close', code => {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('compile-and-run-ts-script', done => {
  gulp.series('tsc', 'run-ts-script', done);
});

gulp.task('watch', () => {
  gulp.watch(['./index.js'], gulp.series(['run-js-script'])); // watch js script changes and execute
  gulp.watch(['./ts/index.ts'], gulp.series(['compile-and-run-ts-script'])); // watch ts script changes and execute
});

gulp.task('default', gulp.series(['run-js-script', 'watch']));

process.on('exit', () => {
  if (node) node.kill();
});
