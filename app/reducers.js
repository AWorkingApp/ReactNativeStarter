import { combineReducers } from 'redux';

/**
 * Reducers
 */
import home from './containers/Home/reducer.js';

const rootReducer = combineReducers({
    home
});

export default rootReducer;
