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
    stringcase = require('stringcase'),
    async = require('async');

apeTasking.runTasks('render-banners', [
    function renderImages(callback) {
        var config = require('./configs/banner-config.json');

        var destinations = {
            'examples/banner': ['png'],
            'docs/images/banner': ['svg']
        };
        async.eachSeries(Object.keys(destinations), function (destDir, callback) {
            var formats = destinations[destDir];
            async.eachSeries(formats, function (format, callback) {
                var extname = '.' + format;
                async.each(config, function (config, callback) {
                    config.format = format;
                    var name = stringcase.lowercase(config.text);
                    var filename = path.resolve(destDir, ['example', name, 'banner'].join('-') + extname);
                    fur.banner(filename, config, callback);
                }, callback);
            }, callback);
        }, callback);
    },
    function renderBud(callback) {
        coz.render('docs/.*.bud', callback);
    }
], true);
