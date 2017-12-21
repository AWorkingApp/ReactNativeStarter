import { takeEvery, delay } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';

import * as HomeActions from './actions';

export function * loadingFunc(){
    yield call(delay, 500); //delay 500ms to simulate loading
    yield put(HomeActions.finishLoading());
}

export function * loadingSaga(){
    yield* takeEvery(HomeActions.LOADING_REQUEST, loadingFunc);
}
