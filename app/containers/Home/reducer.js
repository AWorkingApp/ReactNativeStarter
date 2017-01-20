import { fromJS } from 'immutable';

const initialState=fromJS({
    loading: false
});

export default function home(state = initialState, action = {}) {
    return state;
}