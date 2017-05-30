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
    super(props);
    this.state = {username: '', passError: ''};
  }

  render () {
      return <View style={styles.container}>
          <TextInput 
            label={I18n.t('username')}
            onChangeText={(value) => this.setState({username: value})}
            value={this.state.username}
            validator={(text) => {
               if (!text) {
                  this.setState({userError: 'required'});
               } else if (!/(.+)@(.+){2,}\.(.+){2,}/.test(text)){
                  this.setState({userError: 'format error'});
               } else {
                  this.setState({userError: ''});
               }
            }}
            errorMessage={this.state.userError}
          />
          <TextInput 
            label={I18n.t('password')}
            onChangeText={(value) => this.setState({password: value})}
            value={this.state.password}
            validator={(text) => {
               if (!text) {
                  this.setState({passError: 'required'});
               } else {
                  this.setState({passError: ''});
               }
            }}
            errorMessage={this.state.passError}
            textInputProps={{
              secureTextEntry: true
            }}
          />
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
