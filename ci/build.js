#!/usr/bin/env node

/**
 * Build this package.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking');

apeTasking.runTasks('build', [
    function (callback) {
        require('coz').render([
            ".*.bud",
            "example/.*.bud"
        ], callback);
    }
], true);