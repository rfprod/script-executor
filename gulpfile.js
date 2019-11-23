'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const eslint = require('gulp-eslint');
const tslint = require('gulp-tslint');
const spawn = require('child_process').spawn;
const exec = require('child_process').exec;

let node;
let tsc;

function killProcessByName(name) {
  exec('pgrep ' + name, (error, stdout, stderr) => {
    if (error) console.log('killProcessByName, error:', error);
    if (stderr) console.log('stderr:', stderr);
    if (stdout) {
      console.log('killing running processes:', stdout);
      var runningProcessesIDs = stdout.match(/\d+/);
      runningProcessesIDs.forEach(id => {
        exec('kill -9 ' + id, (error, stdout, stderr) => {
          if (error) throw error;
          if (stderr) console.log('stdout:', stdout);
          if (stdout) console.log('stderr:', stderr);
        });
      });
    }
  });
}

gulp.task('run-js-script', () => {
  if (node) node.kill();
  node = spawn('node', ['-e', 'require("./index.js").exec()'], {
    stdio: 'inherit'
  });
  node.on('close', code => {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
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
  node = spawn(
    'node',
    ['-e', 'new require("./ts/index.js").TestModule.TestTask()'],
    { stdio: 'inherit' }
  );
  node.on('close', code => {
    if (code === 8) {
      console.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('compile-and-run-ts-script', done => {
  runSequence('tsc', 'run-ts-script', done);
});

gulp.task('eslint', () => {
  return gulp
    .src(['./*.js']) // uses ./.eslintignore
    .pipe(eslint('./.eslintrc.json'))
    .pipe(eslint.format());
});

gulp.task('tslint', () => {
  return gulp
    .src(['./public/app/*.ts', './public/app/**/*.ts'])
    .pipe(
      tslint({
        formatter: 'verbose' // 'verbose' - extended info | 'prose' - brief info
      })
    )
    .pipe(
      tslint.report({
        emitError: false
      })
    );
});

gulp.task('watch', () => {
  gulp.watch(['./index.js'], ['eslint', 'run-js-script']); // watch js script changes and execute
  gulp.watch(['./ts/index.ts'], ['tslint', 'compile-and-run-ts-script']); // watch ts script changes and execute
});

gulp.task('default', ['run-js-script', 'watch']);

process.on('exit', () => {
  if (node) node.kill();
});

process.on('SIGINT', () => {
  killProcessByName('gulp');
});
