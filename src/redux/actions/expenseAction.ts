import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  //TO DO action
  setExpenseDataList: ['expenses'],
  onGetExpenseDataList: ['_'],
  onAddExpenseData: ['payload'],
  setExpenseData: ['_'],
  setRemaining: ['_'],
  setSpent: ['_'],
  onDeleteExpense: ['payload']
});
