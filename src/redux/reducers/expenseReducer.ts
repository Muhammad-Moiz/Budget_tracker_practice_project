import { createReducer } from 'reduxsauce';
import { Types } from '../actions/expenseAction';

export interface IExpenseReducer {
  expenses: { id: number; name: string; cost: number }[];
  budget: number;
  loading: boolean;
  error?: string | null;
}

export interface IExpense {
  expenses: { id: number; name: string; cost: number }[];
}

const ExpenseInitialState: IExpenseReducer = {
  budget: 0,
  expenses: [],
  loading: false,
  error: null
};

const setExpenseListData = (state: any, { expenses }: IExpense) => {
  return {
    ...state,
    expenses
  };
};

// ToDo Hook types to reducer
export const ExpenseReducer = createReducer(ExpenseInitialState, {
  [Types.SET_EXPENSE_DATA_LIST]: setExpenseListData
});
