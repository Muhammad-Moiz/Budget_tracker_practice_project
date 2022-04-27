import React from "react";
import { TiDelete } from "react-icons/ti";
interface ItemType {
  id: number;
  name: string;
  cost: string;
}
const ExpenseItem = (item: ItemType) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          £{item.cost}
        </span>
        <TiDelete size="1.5em" />
      </div>
    </li>
  );
};

export default ExpenseItem;
