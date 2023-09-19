import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

    function ExpenseItem({expense}) {  // we are destructuring the object here. there are the properties of the prop from another component 
        const {date, title, amount} = expense;
        const [newTitle, setTitle] = useState (title);

        const clickHandler = () => {
            setTitle ('Updated!');
        };

    return ( //all the return data are JSX code.
        <Card className='expense-item'>
            <div className="Expense-item_description"> 
            <ExpenseDate date = {date}/>
                <h2>{newTitle} </h2>  {/* Here we replace the dummy data from the JS code which is fetching the data from API or other source (backend). JS code  is inside '{ }'  */}
                <div className="expense-item_price">${amount}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;