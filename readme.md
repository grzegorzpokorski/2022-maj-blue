### Pages:

- [index](url_to_deployed site)

### npm comands:

- npm run tailwindD - compile tailwind css in watch mode.
- npm run tailwindB - compile tailwind css.

Both comands above create './src/scss/\_tailwind-output.scss' which is used to compile whole css with gulp css comand.

### Gulp functions:

- gulp images - minify, resize, convert images to webp.
- gulp mainfont - import font assets to dist folder.
- gulp fontawesome - import font assets to dist folder.
- gulp fonts - 'gulp mainfont' and 'gulp fontawesome' commands combined in one.
- gulp css - compile ./src/scss/style.scss to ./dist/css/style.min.css.
- gulp js - compile and translate js from ./src/js/index.js to ./dist/js/bundle.js.
- gulp - in default it runs 'gulp css' and 'gulp js' in watch mode.

### Recommendations:

In development stage recommend use 'npm run tailwindD' and 'gulp' commands at the same time.
