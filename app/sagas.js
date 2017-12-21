import { fork } from 'redux-saga/effects';

import * as HomeSagas from './containers/Home/sagas'

export default function* rootSaga() {
    yield [
        fork(HomeSagas.loadingSaga),
    ]
}