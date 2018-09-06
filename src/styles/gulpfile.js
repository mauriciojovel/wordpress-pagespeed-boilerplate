var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Config variables
var config = {
    localUrl: 'http://dev.com'
};

// Static Server
// Check https://browsersync.io/docs/gulp for more info
gulp.task('serve', [], function() {
    browserSync.init({
        proxy: config.localUrl,
        open: false
    });
});
