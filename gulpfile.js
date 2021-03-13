const gulp = require('gulp')
const concat = require('gulp-concat')
const env = require('gulp-env')
const stylelint = require('gulp-stylelint')

function lint () {
  return gulp.src('.theme/**/*.css')
    .pipe(stylelint({
      failAfterError: true,
      reporters: [
        { formatter: 'string', console: true }
      ]
    }))
}

function outputDir () {
  if (process.env.NODE_ENV === 'dev') {
    try {
      env({
        file: 'config.json'
      })
    } catch (error) {
      console.log('WARNING: Before development please setup config.json per instructions ' +
        '\nand use OUTPUT_DIR variable with local folder path where you want to create obsidian.css')
    }
    return process.env.OUTPUT_DIR || false
  } else {
    return './'
  }
}

function obsidian () {
  return gulp.src([
    '.theme/base.css',
    '.theme/hidden.css',
    '.theme/foundation.css',
    '.theme/wysiwyg.css',
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

    '.theme/mixins/relationship-lines.css',
    '.theme/mixins/syntax-highlighter-colors.css',
    '.theme/mixins/images-addons.css',

    '.theme/plugins/hider-plugin.css',
    '.theme/plugins/calendar-plugin.css',
    '.theme/plugins/andy-mode-plugin.css',
    '.theme/plugins/advanced-tables-plugin.css',
    '.theme/plugins/emoji-toolbar-plugin.css',
    '.theme/plugins/discordian-plugin.css'
  ])
    .pipe(concat('obsidian.css'))
    .pipe(gulp.dest(outputDir()))
}

function watch () {
  gulp.watch('.theme/**/*.css', gulp.parallel('obsidian'))
}

exports.outputDir = outputDir
exports.obsidian = obsidian
exports.build = obsidian
exports.dev = watch
exports.lint = lint

exports.default = obsidian
