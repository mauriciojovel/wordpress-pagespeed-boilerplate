var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
//js
var tap = require('gulp-tap');
var gutil = require('gulp-util');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var buffer = require('gulp-buffer');
var concat = require('gulp-concat');

var browserSync = require('browser-sync').create();

// Config variables
var config = {
  localUrl: 'http://local.dev',
  host: 'local.dev',
  styles: {
    input: './sass/**/*.scss',
    output: './dist/css'
  },
  scripts: {
    input: [
      './node_modules/jquery/dist/jquery.js',
      './node_modules/popper.js/dist/popper.js',
      './node_modules/bootstrap/dist/js/bootstrap.js',
      './js/*.js'
    ],
    output: './dist/js'
  },
  php : {
    input: '../php/**/*.php' 
  },
  sass: {
    errLogToConsole: true,
    outputStyle: 'compressed'
  },
  autoprefixer: {
    browsers: ['last 2 versions', '> 5%']    
  }
};

/*
 * Tasks
 */

// Sass
gulp.task('styles', function () {
  return gulp
    .src(config.styles.input)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass).on('error', sass.logError))
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(config.styles.output))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', function () {
  return gulp.src([
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    './js/*.js'
  ])
    // .pipe(tap(function (file) {
    //   gutil.log('bundling ' + file.path);
    //   file.contents = browserify(file.path, {debug: true}).bundle();
    // }))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write('/maps'))
    .pipe(gulp.dest(config.scripts.output))
    .pipe(browserSync.stream());
});

// Dev
gulp.task('dev', ['styles', 'js'], function() {
  gulp.watch(config.styles.input, ['styles']);
  gulp.watch(config.scripts.input, ['js']);
});

gulp.task('serve', ['styles', 'js'], function() {
      browserSync.init({
          proxy: config.localUrl
      });
      gulp.watch(config.styles.input, ['styles']);
      gulp.watch(config.scripts.input, ['js']);
      gulp.watch(config.php.input).on('change', browserSync.reload);
  });


gulp.task('default', ['styles', 'js']);
