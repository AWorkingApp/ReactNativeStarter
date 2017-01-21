
/**
 * liberies
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import I18n from 'react-native-i18n';

/**
 * Configs
 */
import store from './store.js';
import Routes from './routes.js'; 
import en from './i18n/en.js';
import zh from './i18n/zh.js';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

I18n.translations = {
  en,
  zh,
}

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default App
