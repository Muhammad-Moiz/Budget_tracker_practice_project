import React from 'react';

const AddExpenseForm = () => {

    return (
        <form>
            <div className='row'>
                <div className='col-sm col-lg-4'>
                    <label>Name</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                    />
                </div>
                <div className='col-sm col-lg-4'>
                    <label>Cost</label>
                    <input
                        type='number'
                        className='form-control'
                        id='cost'
                    />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-sm'>
                    <button type='submit' className='btn btn-primary'>
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default AddExpenseForm;