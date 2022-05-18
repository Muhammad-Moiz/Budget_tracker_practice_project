import { all } from 'redux-saga/effects';
import ExpenseSaga from './expenseSaga';

function* rootSaga() {
  yield all([
    /* All sagas go here */
    ExpenseSaga()
  ]);
}

export { rootSaga };
