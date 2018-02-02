import { fork, all } from 'redux-saga/effects';

import * as HomeSagas from './containers/Home/sagas'

export default function* rootSaga() {
    yield all([
        fork(HomeSagas.postResourceSaga),
    ])
}