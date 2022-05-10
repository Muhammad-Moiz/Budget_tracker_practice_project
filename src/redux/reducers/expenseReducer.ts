import { createReducer } from "reduxsauce";
import { ExpenseAction } from "../actions/expenseAction";

export interface IExpenseInitialState {
  expenses: { id: number, name: string, cost: string }[],
  budget: number,
  loading: boolean,
  error?: string | null
}

export interface IExpense {
  expenses: { id: number, name: string, cost: string }[],
}

const ExpenseInitialState: IExpenseInitialState = {
  budget: 0,
  expenses:  [],
  loading: false,
  error: null,
};


const setExpenseListData = (state: any, { expenses }: IExpense) => {
  return {
    ...state,
    expenses,
  };
};

// ToDo Hook types to reducer
export const ExpenseReducer = createReducer(ExpenseInitialState, {
  [ExpenseAction.Types.SET_EXPENSE_DATA_LIST]: setExpenseListData,
});
