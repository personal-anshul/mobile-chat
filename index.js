/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var Home = require('./app/components/Home')

export default class WindbagMobile extends Component {
  render() {
    return (
      <Home />
    );
  }
}

AppRegistry.registerComponent('WindbagMobile', () => WindbagMobile);
