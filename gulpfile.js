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
      '\nIf you want to override this value for local development' +
      'please create config.json\n and set your OUTPUT_DIR variable accordingly')
  }

  return process.env.OUTPUT_DIR || './'
}

function obsidian () {
  return gulp.src([
    '.theme/obsidian-base.scss',
    '.theme/workspace.scss',
    '.theme/scrollbars.scss',
    '.theme/headings.scss',
    '.theme/lists.scss',
    '.theme/task-list.scss',
    '.theme/links.scss',
    '.theme/tags.scss',
    '.theme/toggle-switches.scss',
    '.theme/tables.scss',
    '.theme/codeblocks.scss',
    '.theme/modals.scss',
    '.theme/graph.scss',
    '.theme/folding.scss',

    '.theme/mixins/bullet-point-relationship.scss',
    '.theme/mixins/syntax-highlighter-colors.scss',

    '.theme/mixins/hider-plugin.scss',
    '.theme/mixins/calendar-plugin.scss',
    '.theme/mixins/andy-matuschak-mode.scss'
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
