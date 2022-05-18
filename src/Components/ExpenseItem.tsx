import React from 'react';
import { TiDelete } from 'react-icons/ti';

interface ItemType {
  name: string;
  cost: number;
}

function ExpenseItem({ name, cost }: ItemType) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">£{cost}</span>
        <TiDelete size="1.5em" />
      </div>
    </li>
  );
}

export default ExpenseItem;
