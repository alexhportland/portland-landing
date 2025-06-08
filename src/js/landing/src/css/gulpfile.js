const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const paths = {
  js: 'src/js/landing/**/*.js',
  scss: 'src/css/**/*.scss'
};

function js() {
  return gulp.src(paths.js)
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(concat('landing-scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
}

function css() {
  return gulp.src(paths.scss)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(postcss([autoprefixer()]))
    .pipe(rename('landing-styles.min.css'))
    .pipe(gulp.dest('dist/css'));
}

exports.default = gulp.parallel(js, css);
