import { put, takeLatest } from 'redux-saga/effects';
import { Types } from '../actions/expenseAction';

function* onGetExpenseDataList() {
  //TODO: API call
  try {
    const expenseList = [
      { id: 11, name: 'Abc', cost: 50 },
      { id: 12, name: 'Abc', cost: 50 },
      { id: 13, name: 'Abc', cost: 50 },
      { id: 14, name: 'Abc', cost: 50 },
      { id: 15, name: 'Abc', cost: 50 },
      { id: 16, name: 'Abc', cost: 50 },
      { id: 17, name: 'Abc', cost: 50 }
    ];
    // const response = yield call(getExpenseList); // api call for get data
    yield put({
      type: Types.SET_EXPENSE_DATA_LIST,
      expenses: expenseList
    });
  } catch (error: unknown) {
    console.log('error=> ', error);
  }
}

function* ExpenseSaga() {
  yield takeLatest(Types.ON_GET_EXPENSE_DATA_LIST, onGetExpenseDataList);
}

export default ExpenseSaga;
