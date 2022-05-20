import React, { useState } from 'react';
import { Creators } from '../redux/actions/expenseAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { Alert } from 'react-bootstrap';
interface ItemType {
  name: string;
  cost: number;
}

const AddExpenseForm = () => {
  const [alert, setAlert] = useState(false);

  const { remaining } = useSelector((state: RootState) => state.expenseReducer);
  const [expense, setExpense] = useState<ItemType>({
    name: '',
    cost: 0
  });
  const dispatch = useDispatch();

  const handleName = (name: string) => {
    setExpense({
      ...expense,
      name
    });
  };
  const handleCost = (cost: number) => {
    setExpense({
      ...expense,
      cost
    });
  };

  const handleExpense = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (expense.cost > remaining) {
      setAlert(true);
      return false;
    }
    dispatch(Creators.onAddExpenseData(expense));
    setExpense({
      name: '',
      cost: 0
    });
  };
  return (
    <>
      <Alert
        style={{ display: alert ? 'block' : 'none' }}
        onClose={() => setAlert(false)}
        dismissible
        variant={'danger'}
      >
        Don't have much money
      </Alert>
      <form onSubmit={handleExpense}>
        <div className="row">
          <div className="col-sm col-lg-4">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={expense.name}
              onChange={(event) => handleName(event.target.value)}
              className="form-control"
              id="name"
              required
            />
          </div>
          <div className="col-sm col-lg-4">
            <label>Cost</label>
            <input
              name="cost"
              type="number"
              value={expense.cost}
              onChange={(event) => handleCost(parseInt(event.target.value))}
              className="form-control"
              id="cost"
              required
              min={1}
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-sm">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddExpenseForm;
