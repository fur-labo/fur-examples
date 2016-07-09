#!/usr/bin/env node

/**
 * Render example.
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const execcli = require('execcli')
const path = require('path')
const coz = require('coz')
const co = require('co')
const { exec } = require('child_process')
const expandglob = require('expandglob')

apeTasking.runTasks('render', [
  () => coz.render([
    'example/.*.bud'
  ]),
  () => co(function * () {
    let filenames = yield expandglob(`${__dirname}/../example/*/render*.sh`)
    for (let filename of filenames) {
      yield execcli(filename, [], { cwd: path.dirname(filename) })
    }
  })
], true)
