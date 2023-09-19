import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function ExpenseItem({expense}) {
    const {date, title, amount} = expense;

    return (
        <Card className='expense-item'>
            <div className="expense-item__description"> 
            <ExpenseDate date={date} />
                <h2>{title} </h2>    
            </div>
            <div className="expense-item__price">${amount}</div>
        </Card>
    );
}

export default ExpenseItem;