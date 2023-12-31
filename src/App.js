import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import MyComponent from "./Children";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 20.0,
    date: new Date(2020, 7, 4),
  },
  {
    id: "e2"  ,
    title: "Rice",
    amount: 25.5,
    date: new Date(2020, 8, 5),
  },
  {
    id: "e4",
    title: "Milk",
    amount: 5.45,
    date: new Date(2020, 5, 4),
  },
  {
    id: "e5",
    title: "Egg",
    amount: 5.45,
    date: new Date(2022, 5, 4),
  },
  {
    id: "e6",
    title: "Momo Meat",
    amount: 5.45,
    date: new Date(2023, 5, 4),
  },
];

const App = () => {
  // the data that we are fetching as a data from the backend. 
  // This is one of those data, which has data in an array format. Similarly we can have other data (data from database, other APIs)
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {  // this expense data is coming as a prop from NewExpense component where this function is being called and data is being passed from there to here using props
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onSubmitExpense = {addExpenseHandler}/>
      <Expenses items= {expenses}/>
      <MyComponent /> {/* This is a component to check the number of child component this component has. It is logged in a browser console only. For testing*/}
    </div>
  );
}

export default App;
