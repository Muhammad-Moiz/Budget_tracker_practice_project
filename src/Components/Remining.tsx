import React from 'react';
interface IRemaining {
  remaining: number;
}

const Remaining = ({ remaining }: IRemaining) => {
  return (
    <div className="alert alert-success">
      <span>Remaining: ${remaining}</span>
    </div>
  );
};

export default Remaining;
