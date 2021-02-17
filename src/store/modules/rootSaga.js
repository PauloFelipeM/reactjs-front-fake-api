import { all } from 'redux-saga/effects';

import phones from './phones/sagas';

export default function* rootSaga() {
  return yield all([phones]);
}
