import React from 'react';

function AddExpenseForm() {
  return (
    <form>
      <div className="row">
        <div className="col-sm col-lg-4">
          <label htmlFor="name">
            <input type="text" className="form-control" id="name" />
            Name
          </label>
        </div>
        <div className="col-sm col-lg-4">
          <label htmlFor="cost">
            <input type="number" className="form-control" id="cost" />
            Cost
          </label>
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
  );
}

export default AddExpenseForm;
