// eslint-disable-next-line no-unused-vars
import ExpenseItem  from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import React from 'react';
import ExpensesFilter from "./ExpensesFilter";
import  { useState } from 'react';

const Expenses = (props) => {
  
   const [filteredYear, setFilteredYear] = useState('2021');

   const filterChangeHandler = (selectedYear) => {
     setFilteredYear(selectedYear);
   }
    
    const expensesContent = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
        });

  
      
  return( 
  <>
    
    <Card className="expenses">
    
      <ExpensesFilter
       selected={filteredYear} 
        onChangeFilter={filterChangeHandler}
        
      />
      {expensesContent}

      {/* { filteredExpenses.length === 0 && <p>no expenses found</p>}
      { filteredExpenses.length > 0 &&  
       filteredExpenses.map((expense) => (
        <ExpenseItem  
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
         />

        )) }; */}

      {/* {filteredExpenses === 0  ? <p>no expenses found</p> : 
      filteredExpenses.map((expense) => (
       <ExpenseItem  
         key={expense.id}
         title={expense.title} 
         amount={expense.amount} 
         date={expense.date}
        />
      ))} */}

    </Card>
  </>
    
    );
    
};
export default Expenses;