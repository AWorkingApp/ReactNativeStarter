import React, { Component } from 'react';

import PropTypes from 'prop-types';
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
import { getPost, getPosts } from './actions';
 
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
    static propTypes = {
      loading: PropTypes.bool,
      post: PropTypes.object,
      posts: PropTypes.object,

      getPost: PropTypes.func,
      getPosts: PropTypes.func,
    }

    static defaultProps = {
      loading: false
    }
   
    constructor (props) {
      super(props)
    }

    componentWillMount(){
      this.props.getPost(1);
      this.props.getPosts();
    }
  
    render () {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>
            {this.props.loading ? I18n.t('loading') : I18n.t('home')}
          </Text>
          <Button 
            onPress={()=> {
              this.props.getPost(1)
              this.props.getPosts()
            }}
            disabled={this.props.loading}
            title={this.props.loading ? I18n.t('loading') : I18n.t('button')}
          />
          {!this.props.loading ?
            <View>
              {
                this.props.post !== undefined ?
                <Text>Post {this.props.post.get('title')} is loaded</Text> : null
              }
              {
                this.props.posts !== undefined ?
                <Text>All {this.props.posts.size} Posts are loaded</Text> : null
              }
            </View>
            : null}
        </View>
      )
    }
  }
  
  function mapStateToProps (state) {
    return {
      loading: state.get('home').get('loading'),
      post: state.get('home').get('post'),
      posts: state.get('home').get('posts'),
    };
  }
  
export default connect(mapStateToProps, { getPost, getPosts })(Home)