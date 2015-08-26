var gulp = require('gulp');
var protractor = require('gulp-protractor');
var karmaServer = require('karma').Server;

gulp.task('e2e', function() {
    return gulp.src(['./tests/e2e/**/*.js'])
        .pipe(protractor.protractor({
            configFile: './tests/e2e/protractor.conf.js'
        }))
        .on('error', function(err) {
            throw err;
        });
});

gulp.task('unit', function(done) {
    new karmaServer({
        configFile: __dirname + '/tests/unit/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', function() {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: './tests/unit/karma.conf.js',
            action: 'watch'
        }));
});
