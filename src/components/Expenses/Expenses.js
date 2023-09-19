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

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {items.map((expense, id) => (
        <ExpenseItem
          key={items.id} // It's often recommended to use a unique identifier for keys, not the index.
          expense={expense}
        />
      ))}
    </Card>
    </div>
  );
}

export default Expenses;
