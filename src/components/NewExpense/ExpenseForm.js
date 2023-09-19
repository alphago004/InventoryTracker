import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
     const [enteredTitle, setEnteredTitle] = useState ('');
     const [enteredAmount, setEnteredAmount] = useState ('');
     const [enteredDate, setEnteredDate] = useState ('');

//   const [userInput, setUserInput] = useState ({
//         enteredTitle: '',
//         enteredAmount: '',
//         enteredDate: '',
//     })
    
    const titleChangeHandler = (event) => {
        setEnteredTitle (event.target.value);
        // setUserInput ({
        // ...userInput,   // we did this because we don;t want to loose our other data. This will simply append the other unchanged data in the hook
        // enteredTitle: event.target.value,  // over-riding this value with a new entered value
        // })
        // setUserInput ((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};  // set previous state (unchanged) as it is and only change the enteredTitle value
        // });
    }; 
    
    //creating a single shared change handler 
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'title') {
            setEnteredTitle(value);
        }
        else if (identifier === 'amount') {
            setEnteredAmount(value);
        }
        else {
            setEnteredDate(value);
        }
    };

    const AmountChangeHandler = (event) => {
        setEnteredAmount (event.target.value);
        // setUserInput ({
        // ...userInput,
        // enteredAmount: event.target.value, 
        // })
        //setUserInput ((prevState) => {
        //    return { ...prevState, enteredAmount: event.target.value}
        //})
    };

    const DateChangeHandler = (event) => {
        setEnteredDate (event.target.value);
        // setUserInput ({
        // ...userInput,
        // enteredDate: event.target.value, 
        // })
        // setUserInput ((prevState) => {
        //     return { ...prevState, enteredDate: event.target.value}
        // })
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }; 
        console.log(expenseDate);
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
                value = {enteredTitle} 
                onChange={(event) => inputChangeHandler('title', event.target.value)}/>
            </div>
            <div className='new-expense__control'>
                <label> Amount</label>
                <input type = "number" 
                value = {enteredAmount} // this will make the initial value of the field to be empty (as a new one)
                onChange={(event) => inputChangeHandler('amount', event.target.value)} 
                min="0.01" 
                step="0.01" 
                />
            </div>
            <div className='new-expense__control'>
                <label> Date</label>
                <input type = 'date' 
                value = {enteredDate} 
                onChange={(event) => inputChangeHandler('date', event.target.value)} 
                min="2023-01-01" 
                max="2023-12-31" 
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
