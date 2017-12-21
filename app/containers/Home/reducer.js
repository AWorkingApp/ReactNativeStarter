import { fromJS } from 'immutable';

import * as HomeActions from './actions';

const initialState = fromJS({
    loading: true
});

export default function home(state = initialState, action = {}) {
    switch(action.type){
        case HomeActions.LOADING_REQUEST:
            return state.set('loading', true);
        case HomeActions.FINISH_LOADING:
            return state.set('loading', false);
    }
    return state;
}