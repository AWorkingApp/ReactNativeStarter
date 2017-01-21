import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    textAlign: 'center'
  }
})

class Home extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Home View
        </Text>
      </View>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
  dispatch}
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps, mapStateToProps)(Home)
