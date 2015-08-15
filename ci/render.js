#!/usr/bin/env node

/**
 * Render examples.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    execcli = require('execcli'),
    path = require('path'),
    coz = require('coz'),
    glob = require('glob'),
    async = require('async');


apeTasking.runTasks('render', [
    function renderBuds(callback) {
        coz.render([
            'examples/.*.bud'
        ], callback);
    },
    function renderImage(callback) {
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
