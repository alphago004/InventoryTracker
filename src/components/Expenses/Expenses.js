import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ items }) => {
  return (
    <div className="expenses">
      {items.map((expense, id) => (
        <ExpenseItem
          key={items.id} // It's often recommended to use a unique identifier for keys, not the index.
          expense={expense}
        />
      ))}
    </div>
  );
}

export default Expenses;
