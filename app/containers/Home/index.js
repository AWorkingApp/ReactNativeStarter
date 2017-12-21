import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

/**
 * Third party libaries
 */
import I18n from 'react-native-i18n';

/**
 * Components
 */
import Button from '../../components/Button';

/**
 * Actions
 */
import * as HomeActions from './actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  }
});


class Home extends Component {
    constructor (props) {
      super(props)
    }

    componentWillMount(){
      this.props.loadingRequest();
    }
  
    render () {
      console.log(this.props.loading);
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.loading ? I18n.t('loading') : I18n.t('home')}
          </Text>
          <Button 
            onPress={()=> {
              this.props.loadingRequest()
            }}
            disabled={this.props.loading}
            title={this.props.loading ? I18n.t('loading') : I18n.t('button')}
          />
        </View>
      )
    }
  }
  
  function mapDispatchToProps (dispatch) {
    return {
      dispatch,
      loadingRequest: () => dispatch(HomeActions.loadingRequest())
    };
  }
  
  function mapStateToProps (state) {
    return {
      loading: state.get('home').get('loading'),
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)