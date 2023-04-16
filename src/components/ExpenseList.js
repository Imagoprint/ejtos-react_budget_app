import React from 'react';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const expenses = [
        { id: 1, name: 'Marketing', cost: 60 },
        { id: 2, name: 'Finance', cost: 300 },
        { id: 3, name: 'Sales', cost: 70 },
        { id: 4, name: 'Human Resource', cost: 40 },
        { id: 5, name: 'IT', cost: 500 },
    ];


return (
    <table className='table'>
        <thead className="thead-light">
            <tr>
                <th scope="col">Department</th>
                <th scope="col">Allocated Budget</th>
                <th scope="col">Increase by 10</th>
                <th scope="col">Decrease by 10</th>
                <th scope="col">Delete</th>
</tr>
        </thead>
        <tbody>
        {expenses.map((expense)=>(
       <ExpenseItem
       id={expense.id}
       name={expense.name}
       cost={expense.cost} />
))}
        </tbody>

    </table>

  
);
       };
   
export default ExpenseList;


