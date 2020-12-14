const gulp = require('gulp')
const concat = require('gulp-concat')
const env = require('gulp-env')

function outputDir () {
  try {
    env({
      file: 'config.json'
    })
  } catch (error) {
    console.log('Using default output dir for merged obsidian.css' +
      '\nIf you want to override this value for local development ' +
      'please create config.json\nand set your OUTPUT_DIR variable accordingly')
  }
  return process.env.OUTPUT_DIR || './'
}

function obsidian () {
  return gulp.src([
    '.theme/obsidian-base.css',
    '.theme/hidden.css',
    '.theme/foundation.css',
    '.theme/headings.css',
    '.theme/popovers.css',
    '.theme/suggestions.css',
    '.theme/scrollbars.css',
    '.theme/workspace.css',
    '.theme/lists.css',
    '.theme/task-list.css',
    '.theme/links.css',
    '.theme/tags.css',
    '.theme/footnotes.css',
    '.theme/toggle-switches.css',
    '.theme/tables.css',
    '.theme/codeblocks.css',
    '.theme/modals.css',
    '.theme/buttons.css',
    '.theme/graph.css',
    '.theme/folding.css',
    '.theme/embeds.css',

    '.theme/mixins/bullet-point-relationship.css',
    '.theme/mixins/syntax-highlighter-colors.css',
    '.theme/mixins/marker-highlights.css',

    '.theme/plugins/hider-plugin.css',
    '.theme/plugins/calendar-plugin.css',
    '.theme/plugins/andy-mode-plugin.css'
  ])
    .pipe(concat('obsidian.css'))
    .pipe(gulp.dest(outputDir()))
}

function watch () {
  gulp.watch('.theme/**/*.scss', gulp.parallel('obsidian'))
}

exports.outputDir = outputDir
exports.obsidian = obsidian
exports.build = obsidian
exports.dev = watch

exports.default = obsidian
