var gulp = require('gulp');

var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var webserver = require('gulp-webserver');

var paths = {
  stylesheets: './stylesheets/**/*'
};

gulp.task('sass', function () {
    gulp.src('./stylesheets/app.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({includePaths: ['./bower_components/sanitize-css/dist/',
                                  './bower_components/bourbon/dist/',
                                  './bower_components/neat/app/assets/stylesheets'],
                                  style: 'expanded'}))
        .pipe(sourcemaps.write({includeContent: false}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./'));
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      directoryListing: true,
      open: true
    }));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.stylesheets, ['sass']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'sass']);
