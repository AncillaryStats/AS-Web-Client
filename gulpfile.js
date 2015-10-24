var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
// var Promise = require('bluebird');

// gulp.task('local', function () {
//   gulp.src('config-file.json')
//   .pipe(gulpNgConfig('SportsStats.config', {
//     environment: 'local'
//   }))
//   .pipe(gulp.dest('public/'))
// });

// gulp.task('stage', function () {
//   gulp.src('config-file.json')
//   .pipe(gulpNgConfig('SportsStats.config', {
//     environment: 'stage'
//   }))
//   .pipe(gulp.dest('public/'))
// });

// gulp.task('prod', function () {
//   gulp.src('config-file.json')
//   .pipe(gulpNgConfig('SportsStats.config', {
//     environment: 'production'
//   }))
//   .pipe(gulp.dest('public/'))
// });


gulp.task('prod', function () {
  setAngularEnv('production');
})

gulp.task('local', function () {
  setAngularEnv('local');
});

gulp.task('stage', function () {
  setAngularEnv('stage');
});


function setAngularEnv(env) {
  gulp.src('config-file.json')
  .pipe(gulpNgConfig('SportsStats.config', {
    environment: env
  }))
  .pipe(gulp.dest('public/'))
}