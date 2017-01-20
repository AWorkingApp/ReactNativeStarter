
/**
 * liberies
 */
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View} from 'react-native';
import { Router, Scene, ActionConst} from 'react-native-router-flux';
import { Provider } from 'react-redux';

/**
 * Configs
 */
import store from './store.js';

/**
 * Containers
 */
import Home from './containers/Home';

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
         <Scene key='root' hideNavBar={true} >
            <Scene key='home' component={Home} initial={true} title='Home' direction='vertical'/>
         </Scene>
        </Router>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

export default App
