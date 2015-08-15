#!/usr/bin/env node

/**
 * Release this package.
 */

"use strict";

process.chdir(__dirname);

var apeTasking = require('ape-tasking'),
    apeReleasing = require('ape-releasing');

apeTasking.runTasks('release', [
    function releasePackage(callback) {
        apeReleasing.releasePackage({
            beforeRelease: [
                './ci_build.js'
            ]
        }, callback);
    }
], true);
