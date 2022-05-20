import { useEffect } from 'react';
import Budget from './Components/Budget';
import Remaining from './Components/Remining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { Creators } from './redux/actions/expenseAction';

export interface IExpenseObject {
  name: string;
  cost: number;
}

function App() {
  const { budget, remaining, spent } = useSelector(
    (state: RootState) => state.expenseReducer
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Creators.onAddExpenseData());
  }, [dispatch]);
  return (
    <div className="container">
      <h1 className="mt-3">My Budget Planner </h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget budget={budget} />
        </div>
        <div className="col-sm">
          <Remaining remaining={remaining} />
        </div>
        <div className="col-sm">
          <ExpenseTotal spentTotal={spent} />
        </div>
      </div>

      <h3 className="mt-3">Expenses</h3>
      <div className="row ">
        <div className="col-sm">
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
}

export default App;
