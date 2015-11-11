const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const nano = require('gulp-cssnano');

gulp.task('sass', () => {
  gulp.src('./scss/elements.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./dist'))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(nano())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);
