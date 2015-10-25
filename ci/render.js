#!/usr/bin/env node

/**
 * Render example.
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
            'example/.*.bud'
        ], callback);
    },
    function renderImage(callback) {
        async.waterfall([
            function (callback) {
                glob('example/*/render*.sh', callback);
            },
            function (filenames, callback) {
                async.eachSeries(filenames, function (filename, callback) {
                    execcli('bash', [path.resolve(filename)], {
                        cwd: path.dirname(path.resolve(filename))
                    }, callback);
                }, callback);
            }
        ], callback);
    }
], true);
