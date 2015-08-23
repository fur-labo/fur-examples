/**
 * Examples for fur.
 * @module fur-examples
 */

"use strict";

var FUR_FONT = 'bt',
    FUR_COLOR = 'e',

    COZ_COLOR = 'o',
    COZ_FONT = 'aa',

    PUDDING_COLOR = '#004BBB',
    PUDDING_FONT = 'cn',

    APEMAN_COLOR = '#3C0B00',
    APEMAN_FONT = 'p',

    PON_COLOR = 'g',
    PON_FONT = "ar";

exports['01-fur'] = {
    $banner: {
        text: "FUR",
        color: FUR_COLOR,
        font: FUR_FONT,
        style: "default"
    },
    $favicon: {
        text: "F",
        color: FUR_COLOR,
        font: FUR_FONT,
        "style": "default"
    }
};

exports['02-coz'] = {
    $banner: {
        text: "coz",
        color: COZ_COLOR,
        font: COZ_FONT,
        style: "plain"
    },
    $favicon: {
        text: "c",
        color: COZ_COLOR,
        font: COZ_FONT,
        style: "plain"
    }
};

exports['03-apeman'] = {
    $banner: {
        text: "apeman",
        color: APEMAN_COLOR,
        font: APEMAN_FONT,
        style: "default"
    },
    $favicon:{
        text:'ap',
        color: APEMAN_COLOR,
        font: APEMAN_FONT,
        style:'circle'
    }
};

exports['04-pudding'] = {
    $banner: {
        text: "PUDDING",
        color: PUDDING_COLOR,
        font: PUDDING_FONT,
        style: "plain"
    },
    $favicon: {
        text: "P",
        color: PUDDING_COLOR,
        font: PUDDING_FONT,
        style: "default"
    }
};

exports['05-pon'] = {
    $banner: {
        text: "pon",
        color: PON_COLOR,
        font: PON_FONT,
        style: "plain"
    },
    $favicon:{
        text:'pon',
        color: PON_COLOR,
        font: PON_FONT,
        style:'circle'
    }
};

