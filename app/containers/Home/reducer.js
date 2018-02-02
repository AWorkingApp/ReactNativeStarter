import { fromJS } from 'immutable';

import * as HomeActions from './actions';

const initialState = fromJS({
    loading: true,

    post: undefined,
    posts: undefined,
});

export default function home(state = initialState, action = {}) {
    switch(action.type){
        case HomeActions.GET_POST_RESOURCE:
        case HomeActions.GET_POSTS_RESOURCE:
           return initialState;

        case HomeActions.GET_POST_SUCCESS:
            return state.set('loading', false).set('post', fromJS(action.post));

        case HomeActions.GET_POSTS_SUCCESS:
            return state.set('loading', false).set('posts', fromJS(action.posts));
    }
    return state;
}