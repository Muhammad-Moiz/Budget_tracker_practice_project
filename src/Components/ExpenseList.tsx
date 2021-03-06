import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import ExpenseItem from './ExpenseItem';
import { Creators } from '../redux/actions/expenseAction';

export interface IExpenseObject {
  name: string;
  cost: number;
}

const ExpenseList = () => {
  const dispatch = useDispatch();

  const { expenses } = useSelector((state: RootState) => state.expenseReducer);

  useEffect(() => {
    dispatch(Creators.onGetExpenseDataList());
  }, [dispatch]);

  return (
    <ul className="list-group mt-3 mb-3">
      {expenses.map((expense: IExpenseObject) => (
        <ExpenseItem
          key={expense.name}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
