var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');

gulp.task('local', function () {
  gulp.src('config-file.json')
  .pipe(gulpNgConfig('SportsStats.config', {
    environment: 'local'
  }))
  .pipe(gulp.dest('public/'))
});

gulp.task('stage', function () {
  gulp.src('config-file.json')
  .pipe(gulpNgConfig('SportsStats.config', {
    environment: 'stage'
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