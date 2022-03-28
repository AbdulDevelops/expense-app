import ExpenseItem  from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import React from 'react';
import ExpensesFilter from "./ExpensesFilter";
import  { useState } from 'react';

const Expenses = (props) => {
  
   const [filteredYear, setFilteredYear] = useState('2020');

   const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
   }
  
  return( 
  <>
    <h1>lets Get Started</h1>
    <Card className="expenses">

      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      
      {props.items.map((expense) => (
      <ExpenseItem  
        title={expense.title} 
        amount={expense.amount} 
        date={expense.date}/>
      ))}

    </Card>
  </>
    
);



}
export default Expenses;