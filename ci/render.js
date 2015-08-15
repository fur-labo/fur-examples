#!/usr/bin/env node

/**
 * Render examples.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    execcli = require('execcli'),
    path = require('path'),
    glob = require('glob'),
    async = require('async');


apeTasking.runTasks('render', [
    function renderExamples(callback) {
        async.waterfall([
            function (callback) {
                glob('examples/*/render*.sh', callback);
            },
            function (filenames, callback) {
                async.eachSeries(filenames, function (filename, callback) {
                    execcli('bash', [path.resolve(filename)], {
                        cwd: path.dirname(filename)
                    }, callback);
                }, callback);
            }
        ], callback);
    }
], true);
