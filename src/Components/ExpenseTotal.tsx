import React from 'react';
interface IRemaining {
  spentTotal: number;
}
const ExpenseTotal = ({ spentTotal }: IRemaining) => {
  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${spentTotal}</span>
    </div>
  );
};

export default ExpenseTotal;
