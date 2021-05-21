'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;

let node;

gulp.task('run-js-script', done => {
  if (node) node.kill();
  node = spawn('node', ['-e', 'require("./index.js").exec()'], {
    stdio: 'inherit',
  });
  node.on('close', code => {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    } else {
      done();
    }
  });
});

gulp.task('run-ts-script', done => {
  if (node) node.kill();
  node = spawn('ts-node', ['-P', './tsconfig.json', './ts/index.ts'], {
    stdio: 'inherit',
  });
  node.on('close', code => {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    } else {
      done();
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(['./index.js'], gulp.series(['run-js-script'])); // watch js script changes and execute
  gulp.watch(['./ts/index.ts'], gulp.series(['run-ts-script'])); // watch ts script changes and execute
});

gulp.task('default', gulp.series(['run-js-script', 'watch']));

process.on('exit', () => {
  if (node) node.kill();
});
