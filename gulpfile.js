const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const rename = require("gulp-rename");
const webpack = require("webpack");
const webp = require("gulp-webp");
const imageResize = require("gulp-image-resize");
// const browserSync = require("browser-sync").create();

const css = function () {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed",
      }).on("error", sass.logError)
    )
    .pipe(autoprefixer())
    .pipe(
      rename({
        suffix: ".min",
        basename: "style",
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"));
};

const fontawesome = function () {
  return gulp
    .src(["./node_modules/@fortawesome/fontawesome-free/webfonts/*"])
    .pipe(gulp.dest("dist/fonts/fontawesome"));
};

// change a main font path
// then change font path in scss file in ./src/scss/_fonts.scss
const mainfont = function () {
  return gulp
    .src(["./node_modules/@fontsource/rubik/files/*"])
    .pipe(gulp.dest("dist/fonts/rubik"));
};

const js = function (cb) {
  return webpack(require("./webpack.config.js"), function (err, stats) {
    if (err) throw err;
    cb();
  });
};

const images = function () {
  let sizes = [1920, 1200, 992, 768, 576];
  let stream;

  sizes.forEach((size) => {
    stream = gulp
      .src("./src/img/**/*")
      .pipe(
        imageResize({
          width: size,
          upscale: false,
          imageMagick: true,
        })
      )
      .pipe(webp())
      .pipe(
        rename({
          suffix: "-" + size + "w",
        })
      )
      .pipe(gulp.dest("dist/img"));
  });

  return stream;
};

const server = function (cb) {
  browserSync.init({
    server: {
      baseDir: "./",
    },
    notify: false, //reszta opcji z dokumentacji browsersync
    //host: "192.168.0.24",
    //port: 3000,
    open: true,
    //browser: "google chrome" //https://stackoverflow.com/questions/24686585/gulp-browser-sync-open-chrome-only
  });

  cb();
};

const watch = function (cb) {
  gulp.watch("src/scss/**/*.scss", { usePolling: true }, gulp.series(css));
  gulp.watch("src/js/**/*.js", gulp.series(js));
  // gulp.watch("dist/**/*").on("change", browserSync.reload);
  // gulp.watch("*.html").on("change", browserSync.reload);

  cb();
};

exports.default = gulp.series(css, js, watch);
// exports.autoreload = gulp.series(css, js, server, watch);
exports.css = css;
exports.fontawesome = fontawesome;
exports.mainfont = mainfont;
exports.fonts = gulp.series(fontawesome, mainfont);
exports.js = js;
exports.images = images;
// exports.server = server;
exports.watch = watch;
