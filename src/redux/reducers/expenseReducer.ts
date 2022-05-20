import { createReducer } from 'reduxsauce';
import { Types } from '../actions/expenseAction';

export interface IExpenseReducer {
  expenses: { id: number; name: string; cost: number }[];
  budget: number;
  remaining: number;
  spent: number;
  loading: boolean;
  error?: string | null;
}
export interface IExpenses {
  expenses: { name: string; cost: number }[];
}
export interface IExpense {
  name: string;
  cost: number;
}
interface IRemaining {
  remaining: number;
}
interface ISpent {
  spent: number;
}

export interface IExpenseObject {
  expense?: {
    name: string;
    cost: number;
  };
}

const ExpenseInitialState: IExpenseReducer = {
  budget: 1000,
  remaining: 0,
  spent: 0,
  expenses: [],
  loading: false,
  error: null
};

const setExpenseListData = (state: any, { expenses }: IExpenses) => {
  return {
    ...state,
    expenses
  };
};

const setRemaining = (state: any, { remaining }: IRemaining) => {
  return {
    ...state,
    remaining: remaining
  };
};
const setSpent = (state: any, { spent }: ISpent) => {
  return {
    ...state,
    spent: spent
  };
};
// ToDo Hook types to reducer
export const ExpenseReducer = createReducer(ExpenseInitialState, {
  [Types.SET_EXPENSE_DATA_LIST]: setExpenseListData,
  [Types.SET_REMAINING]: setRemaining,
  [Types.SET_SPENT]: setSpent
});
