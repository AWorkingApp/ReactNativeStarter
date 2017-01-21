import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import I18n from 'react-native-i18n';

import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  username: {
    marginBottom: 25,
  }
});

class Login extends Component {
  constructor (props) {
    super(props)
  }

  render () {
      return <View style={styles.container}>
          <TextInput style={styles.username} label={I18n.t('username')}/>
          <Button title={I18n.t('login')} raised />
        </View>
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch
  }
}

function mapStateToProps (state) {
  return {
  }
}

export default connect(mapStateToProps, mapStateToProps)(Login)
