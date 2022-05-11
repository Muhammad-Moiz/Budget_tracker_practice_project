import { combineReducers } from 'redux';
import { ExpenseReducer } from './expenseReducer';

const reducers = combineReducers({
  expenseReducer: ExpenseReducer
});

export default reducers;
