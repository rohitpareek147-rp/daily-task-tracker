const React = require('react');
module.exports = {
  ...jest.requireActual('react-native'),
  Platform: { OS: 'ios', select: () => {} },
  NativeModules: {},
  __fbBatchedBridgeConfig: {},
};
