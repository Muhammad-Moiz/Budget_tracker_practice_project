import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest, select } from 'redux-saga/effects';
import { Types } from '../actions/expenseAction';
import { IExpenseObject, IExpense } from '../reducers/expenseReducer';
import { RootState } from '../store';

function* onGetExpenseDataList() {
  //TODO: API call
  try {
    const expenseList = [
      { name: 'Abc1', cost: 50 },
      { name: 'Abc2', cost: 50 },
      { name: 'Abc3', cost: 50 },
      { name: 'Abc4', cost: 50 },
      { name: 'Abc5', cost: 50 },
      { name: 'Abc6', cost: 50 },
      { name: 'Abc7', cost: 50 }
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

function* onAddExpenseData({ payload }: PayloadAction<IExpenseObject>) {
  const { budget, expenses } = yield select(
    (state: RootState) => state?.expenseReducer
  );

  const expenseList = [...expenses];
  if (payload) {
    expenseList.push(payload);
  }

  let total = 0;
  expenseList.forEach((expense: IExpense) => {
    total += expense.cost;
  });
  yield put({
    type: Types.SET_REMAINING,
    remaining: budget - total
  });
  yield put({
    type: Types.SET_SPENT,
    spent: total
  });
  yield put({
    type: Types.SET_EXPENSE_DATA_LIST,
    expenses: expenseList
  });
}

function* onDeleteExpense({ payload }: PayloadAction<string>) {
  let { expenses, budget } = yield select(
    (state: RootState) => state?.expenseReducer
  );
  expenses = expenses.filter((expense: IExpense) => expense.name !== payload);
  let total = 0;
  expenses.forEach((expense: IExpense) => {
    total += expense.cost;
  });
  yield put({
    type: Types.SET_REMAINING,
    remaining: budget - total
  });
  yield put({
    type: Types.SET_SPENT,
    spent: total
  });
  yield put({
    type: Types.SET_EXPENSE_DATA_LIST,
    expenses: expenses
  });
}

function* ExpenseSaga() {
  yield takeLatest(Types.ON_GET_EXPENSE_DATA_LIST, onGetExpenseDataList);
  yield takeLatest(Types.ON_ADD_EXPENSE_DATA, onAddExpenseData);
  yield takeLatest(Types.ON_DELETE_EXPENSE, onDeleteExpense);
}

export default ExpenseSaga;
