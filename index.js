/**
 * Examples for fur.
 * @namespace FurExamples
 */

'use strict';

const FUR_FONT = 'bt'
const FUR_COLOR = '#ff9100'
const COZ_COLOR = '#00b560'
const COZ_FONT = 'aa'
const PUDDING_COLOR = 'bi'
const PUDDING_FONT = 'cn'
const APEMAN_COLOR = 'n'
const APEMAN_FONT = 'p'
const APEMAN_CONTRIB_FAVICON_SHAPE = 'i'
const APEMAN_CONTRIB_FAVICON_FONT_SIZE = 92
const PON_COLOR = 'ah'
const PON_FONT = 'ar'
const RFUNC_COLOR = 'ac'
const RFUNC_FONT = 'e'

exports[ '01-fur' ] = {
  $banner: {
    text: 'FUR',
    color: FUR_COLOR,
    font: FUR_FONT,
    shape: 'a'
  },
  $favicon: {
    text: 'F',
    color: FUR_COLOR,
    font: FUR_FONT,
    shape: 'a'
  }
}

exports[ '02-coz' ] = {
  $banner: {
    text: 'coz',
    color: COZ_COLOR,
    font: COZ_FONT,
    shape: 'b'
  },
  $favicon: {
    text: 'c',
    color: COZ_COLOR,
    font: COZ_FONT,
    shape: 'c'
  }
}

exports[ '03-apeman' ] = {
  $banner: {
    text: 'apeman',
    color: APEMAN_COLOR,
    font: APEMAN_FONT,
    shape: 'a'
  },
  $favicon: {
    text: 'ap',
    color: APEMAN_COLOR,
    font: APEMAN_FONT,
    shape: 'g'
  }
}

exports[ '04-pudding' ] = {
  $banner: {
    text: 'PUDDING',
    color: PUDDING_COLOR,
    font: PUDDING_FONT,
    shape: 'e'
  },
  $favicon: {
    text: 'P',
    color: PUDDING_COLOR,
    font: PUDDING_FONT,
    shape: 'a'
  }
}

exports[ '05-pon' ] = {
  $banner: {
    text: 'pon',
    color: PON_COLOR,
    font: PON_FONT,
    shape: 'f'
  },
  $favicon: {
    text: 'pon',
    color: PON_COLOR,
    font: PON_FONT,
    shape: 'g'
  }
}

exports[ '06-rfunc' ] = {
  $banner: {
    text: 'rfunc',
    color: RFUNC_COLOR,
    font: RFUNC_FONT,
    shape: 'f'
  },
  $favicon: {
    text: 'rf',
    color: RFUNC_COLOR,
    font: RFUNC_FONT,
    shape: 'c',
    fontSize: '148'
  }
}

exports[ '08-apeman-app-contrib' ] = {
  $favicon: {
    text: 'app',
    color: APEMAN_COLOR,
    font: APEMAN_FONT,
    shape: APEMAN_CONTRIB_FAVICON_SHAPE,
    fontSize: APEMAN_CONTRIB_FAVICON_FONT_SIZE
  }
}
