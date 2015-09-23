'use strict';

var gulp = require('gulp');
var protractor = require('gulp-protractor');
var karmaServer = require('karma').Server;
var eslint = require('gulp-eslint');

gulp.task('dev', function devTask() {
	var watcher = gulp.watch(['gulpfile.js', './app/**/*.js', './tests/**/*.js']);
	watcher.on('change', function fileChanged() {
		gulp.src(['gulpfile.js', './app/**/*.js', './tests/**/*.js'])
			.pipe(eslint())
			.pipe(eslint.format());
	});
});

gulp.task('lint', function lintTask() {
	return gulp.src(['gulpfile.js', './app/**/*.js', './tests/**/*.js'])
		.pipe(eslint())
		.pipe(eslint.format());
});

gulp.task('e2e', function e2eTask() {
    return gulp.src(['./tests/e2e/**/*.js'])
        .pipe(protractor.protractor({
            configFile: './tests/e2e/protractor.conf.js'
        }))
        .on('error', function protractorFailed(err) {
            throw err;
        });
});

gulp.task('unit', function unitTask(done) {
    new karmaServer({
        configFile: __dirname + '/tests/unit/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', function defaultTask() {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: './tests/unit/karma.conf.js',
            action: 'watch'
        }));
});
