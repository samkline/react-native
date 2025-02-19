/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

import type {ResolvedAssetSource} from './AssetSourceResolver';
import type {HostComponent} from '../Renderer/shims/ReactNativeTypes';
import type {ImageProps} from './ImageProps';
import type {ViewProps} from '../Components/View/ViewPropTypes';
import * as NativeComponentRegistry from '../NativeComponent/NativeComponentRegistry';
import type {
  ColorValue,
  DangerouslyImpreciseStyle,
  ImageStyleProp,
} from '../StyleSheet/StyleSheet';

type Props = $ReadOnly<{
  ...ImageProps,
  ...ViewProps,

  style?: ImageStyleProp | DangerouslyImpreciseStyle,

  // iOS native props
  tintColor?: ColorValue,

  // Android native props
  shouldNotifyLoadEvents?: boolean,
  src?: ?ResolvedAssetSource | $ReadOnlyArray<{uri: string, ...}>,
  headers?: ?string,
  defaultSrc?: ?string,
  loadingIndicatorSrc?: ?string,
  internal_analyticTag?: ?string,
}>;

const TextInlineImage: HostComponent<Props> =
  NativeComponentRegistry.get<Props>('RCTTextInlineImage', () => ({
    uiViewClassName: 'RCTTextInlineImage',
    bubblingEventTypes: {},
    directEventTypes: {
      topLoadStart: {
        registrationName: 'onLoadStart',
      },
      topProgress: {
        registrationName: 'onProgress',
      },
      topError: {
        registrationName: 'onError',
      },
      topPartialLoad: {
        registrationName: 'onPartialLoad',
      },
      topLoad: {
        registrationName: 'onLoad',
      },
      topLoadEnd: {
        registrationName: 'onLoadEnd',
      },
    },
    validAttributes: {
      blurRadius: true,
      capInsets: {
        diff: require('../Utilities/differ/insetsDiffer'),
      },
      defaultSource: {
        process: require('./resolveAssetSource'),
      },
      defaultSrc: true,
      fadeDuration: true,
      headers: true,
      internal_analyticTag: true,
      loadingIndicatorSrc: true,
      onError: true,
      onLoad: true,
      onLoadEnd: true,
      onLoadStart: true,
      onPartialLoad: true,
      onProgress: true,
      overlayColor: {
        process: require('../StyleSheet/processColor'),
      },
      progressiveRenderingEnabled: true,
      resizeMethod: true,
      resizeMode: true,
      shouldNotifyLoadEvents: true,
      source: true,
      src: true,
      tintColor: {
        process: require('../StyleSheet/processColor'),
      },
    },
  }));

module.exports = TextInlineImage;
