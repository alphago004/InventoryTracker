import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const submitExpenseDataHandler = (enteredExpenseData) => {  // calling the function 'submitExpenseDataHandler = () => {}' with the help of pointer 'submitExpenseDataHandler' that was being passed as a function from its child component 'ExpenseForm'
        const expenseData = {  // fetching the data from the argument and storing it in another object.
            ...enteredExpenseData,
            id: Math.random().toString(), 
        };
        console.log(expenseData);
        props.onSubmitExpense(expenseData);
    };

    return (
    <div className="new-expense" >
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler}/>  {/* 'onSubmitExpenseData' is a prop that is being passed from here that will be used as a function in ExpenseForm to fetch data*/ }
    </div>
    );
};

export default NewExpense;