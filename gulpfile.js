/****************
 * Gaming Register Client
 ***************/
'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor').protractor;
var karmaServer = require('karma').Server;
var eslint = require('gulp-eslint');
var exec = require('child_process').exec;

gulp.task('dev', function devTask() {
	var watcher = gulp.watch(['gulpfile.js', './app/**/*.js', './tests/**/*.js']);
	watcher.on('change', function fileChanged() {
		gulp.src(['gulpfile.js', './app/**/*.js', './tests/**/*.js'])
			.pipe(eslint())
			.pipe(eslint.format());
		new karmaServer({ //eslint-disable-line new-cap
			configFile: __dirname + '/tests/unit/karma.conf.js',
			singleRun: false
		}).start();
	});
});

gulp.task('lint', function lintTask() {
	return gulp.src(['gulpfile.js', './app/**/*.js', './tests/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('e2e', function e2eTask() {
	require('./tests/e2e/mock-api/server.js');

    //gulp.src(['./tests/e2e/spec/**/*.js'])
	gulp.src(['./tests/e2e/spec/main.spec.js'])
        .pipe(protractor({
            configFile: './tests/e2e/protractor.conf.js'
        }));

});

gulp.task('unit', function unitTask(done) {
    new karmaServer({ //eslint-disable-line new-cap
        configFile: __dirname + '/tests/unit/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('run', function runApp(cb) {
	exec('.\\nw_support\\nw.exe .', function executeFunction(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});

gulp.task('build', ['unit', 'e2e', 'lint'], function runAll() {});

gulp.task('default', function defaultTask() {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: './tests/unit/karma.conf.js',
            action: 'watch'
        }));
});
