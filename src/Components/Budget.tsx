import React from 'react';
interface IBudget {
  budget: number;
}

const Budget = ({ budget }: IBudget) => {
  return (
    <div className="alert alert-secondary">
      <span>Budget: ${budget}</span>
    </div>
  );
};

export default Budget;
