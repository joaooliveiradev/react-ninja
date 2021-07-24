'use strict'

const gulp = require('gulp')
const { series } = require('gulp')
const { spawn } = require('child_process')

gulp.task('lint', (cb) => {
  const cmd = spawn('yarn', ['lint'], { stdio: 'inherit', shell: true })
  cmd.on('close', () => cb())
})

gulp.task('default', function () {
  gulp.watch('src/**/*.js', gulp.series('lint'))
})
