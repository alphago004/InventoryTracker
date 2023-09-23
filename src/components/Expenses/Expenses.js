import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState ('2022');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);  
  };

  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }); 

  const totalAmount = Math.round(filteredExpenses.reduce((acc, expense) => acc + expense.amount, 0) * 10) / 10;

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {filteredExpenses.length === 0 ? ( 
      <p style={{color: "white"}}>No Expenses Found. </p> 
      ): (  
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={items.id} // It's often recommended to use a unique identifier for keys, not the index.
          expense={expense}
          //title = {expense.title}
          //amount = {expense.amount}
          //date = {expense.date}
        />
      ))
    )}
      <div style={{color:"white"}}>Total Amount: ${totalAmount}</div>
    </Card>
    </div>
  );
}

export default Expenses;
