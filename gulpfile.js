var gulp = require("gulp"),
    include = require("gulp-include"),
    watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('source/javascripts/source/**/*.js', ['javascripts']);
});

gulp.task("javascripts", function() {
  console.log("-- gulp is running task 'javascripts'");
  gulp.src("source/javascripts/source/app.js")
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest("source/javascripts"));
});

gulp.task("default", ["watch"]);
gulp.task("build", ["javascripts"]);