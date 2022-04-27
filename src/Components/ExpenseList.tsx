import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 11, name: 'Abc', cost: '50', },
        { id: 12, name: 'Abc', cost: '50', },
        { id: 13, name: 'Abc', cost: '50', },
        { id: 14, name: 'Abc', cost: '50', },
        { id: 15, name: 'Abc', cost: '50', },
        { id: 16, name: 'Abc', cost: '50', },
        { id: 17, name: 'Abc', cost: '50', },

    ]
    return (
        <>
            <ul className='list-group mt-3 mb-3'>
                {expenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                ))}
            </ul>
        </>
    );
};

export default ExpenseList;