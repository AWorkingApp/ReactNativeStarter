import { delay } from 'redux-saga';
import { takeEvery, call, put, all } from 'redux-saga/effects';

import * as HomeActions from './actions';

import {
    PostResource
} from '../../resources';

export function * postResourceFunc(action){
    yield call(delay, 500); //delay 500ms to simulate loading
    let result;
    
    switch(action.type){
        case HomeActions.GET_POST_RESOURCE:
            result = yield call(PostResource.get, action.id);
            yield put(HomeActions.getPostSuccess(result.data));
            break;
        case HomeActions.GET_POSTS_RESOURCE:
            result = yield call(PostResource.getAll);
            yield put(HomeActions.getPostsSuccess(result.data));
            break;
    }
}

export function * postResourceSaga(){
    yield takeEvery(HomeActions.GET_POSTS_RESOURCE, postResourceFunc);
    yield takeEvery(HomeActions.GET_POST_RESOURCE, postResourceFunc);
}
