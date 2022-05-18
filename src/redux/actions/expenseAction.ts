import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  //TO DO action
  setExpenseDataList: ['expenses'],
  onGetExpenseDataList: ['_']
});
