#!/usr/bin/env node

/**
 * @file Render banner examples.
 */

"use strict";

process.chdir(__dirname + '/..');

var apeTasking = require('ape-tasking'),
    fur = require('fur'),
    coz = require('coz'),
    path = require('path'),
    mkdirp = require('mkdirp'),
    stringcase = require('stringcase'),
    filecopy = require('filecopy'),
    async = require('async');


apeTasking.runTasks('render-banners', [
    function renderImages(callback) {
        var config = require('./configs/banner-config.json');

        var destDir = 'examples/banner';
        async.eachSeries(['svg', 'png'], function (format, callback) {
            var extname = '.' + format;
            async.each(config, function (config, callback) {
                config.format = format;
                var name = stringcase.lowercase(config.text);
                var filename = path.resolve(destDir, ['example', name, 'banner'].join('-') + extname);
                fur.banner(filename, config, callback);
            }, callback);
        }, callback);
    },
    function copyToDocs(callback) {
        var dirname = 'docs/images/banner';
        async.series([
            function (callback) {
                mkdirp(dirname, callback)
            },
            function (callback) {
                filecopy('examples/banner/*.*', dirname, callback);
            }
        ], callback);
    },
    function renderBud(callback) {
        coz.render('docs/.*.bud', callback);
    }
], true);
