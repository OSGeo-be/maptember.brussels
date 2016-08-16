var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('copy-dep', function() {
    gulp.src('bower_components/jquery/dist/jquery.js')
        .pipe(gulp.dest('dep'));
    gulp.src('bower_components/what-input/what-input.js')
        .pipe(gulp.dest('dep'));
    gulp.src('bower_components/foundation-sites/dist/foundation.js')
        .pipe(gulp.dest('dep'));
});

gulp.task('default', ['sass', 'copy-dep'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
