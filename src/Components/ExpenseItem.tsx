import { TiDelete } from 'react-icons/ti';
import { useDispatch } from 'react-redux';
import { Creators } from '../redux/actions/expenseAction';
import { IExpenseObject } from './ExpenseList';
import './style.css';

const ExpenseItem = (item: IExpenseObject) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(Creators.onDeleteExpense(item.name));
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.name}
      <div>
        <span className="badgeClass">£{item.cost}</span>
        <TiDelete size="1.5em" onClick={(event) => handleDelete()} />
      </div>
    </li>
  );
};

export default ExpenseItem;
