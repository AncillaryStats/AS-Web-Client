var gulp = require('gulp');
var concat = require('gulp-concat');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('scripts', function() {
  return gulp.src('js/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts'])


gulp.task('local', function () {
  gulp.src('config-file.json')
  .pipe(gulpNgConfig('SportsStats.config', {
    environment: 'local'
  }))
  .pipe(gulp.dest('public/'))
});

gulp.task('prod', function () {
  gulp.src('config-file.json')
  .pipe(gulpNgConfig('SportsStats.config', {
    environment: 'production'
  }))
  .pipe(gulp.dest('public/'))
});