import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
    //TO DO action 
    setExpenseDataList: ['expenses'],
    onGetExpenseDataList: ['_']
  });
  
  export const ExpenseAction = { Types, Creators };
  