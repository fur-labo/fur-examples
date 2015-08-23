#!/usr/bin/env node

/**
 * Update project.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    apeUpdating = require('ape-updating');

apeTasking.runTasks('update', [
    function updateDependencies(callback) {
        apeUpdating.updateDependencies({}, callback);
    }
], true);
