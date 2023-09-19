import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
     const [enteredTitle, setEnteredTitle] = useState ('');
     const [enteredAmount, setEnteredAmount] = useState ('');
     const [enteredDate, setEnteredDate] = useState ('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle (event.target.value);
    }; 

    const amountChangeHandler = (event) => {
        setEnteredAmount (event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate (event.target.value);
    };
    
    //creating a single shared change handler 
    // const inputChangeHandler = (identifier, value) => {
    //     if (identifier === 'title') {
    //         setEnteredTitle(value);
    //     }
    //     else if (identifier === 'amount') {
    //         setEnteredAmount(value);
    //     }
    //     else {
    //         setEnteredDate(value);
    //     }
    // };


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }; 

        props.onSubmitExpenseData(expenseDate);  // sending the data 'expenseData from this component to the NewExpense component. There is this component 'ExpenseForm being returned with onSubmitExpenseDate prop. <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler}/>  )
        // to set the inputvalue to empty after the user has submitted the form (to get a new blank form)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit = {submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label> Title</label>
                <input type = "text" 
                value = {enteredTitle} //two way binding. Passing the data to and fro
                onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label> Amount</label>
                <input type = "number" 
                value = {enteredAmount} // this will make the initial value of the field to be empty (as a new one)
                onChange={amountChangeHandler} 
                min="0.01" 
                step="0.01" 
                />
            </div>
            <div className='new-expense__control'>
                <label> Date</label>
                <input type = 'date' 
                value = {enteredDate} 
                onChange={dateChangeHandler} 
                min="2021-01-01" 
                max="2025-12-31" 
                />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit"> Add Expense</button> 
        </div>
    </form>
    );
};

export default ExpenseForm;
