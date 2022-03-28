import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import React from 'react';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense';
import { useState } from 'react';




 const DUMMY_EXPENSES = [
  {
     id: 'e1',
     title: 'Rocket',
     amount: 16.97,
      date:  new Date(2021,2,12),
 },
    
 {
      id: 'e2',
      title: 'Car Insurance',
      amount: 266.97,
      date: new Date(2021,4,12),

  },
    
  { id: 'e3',
    title: 'New TV',
    amount: '666.97',
    date: new Date(2021,5,12),

  },
  {
  id: 'e4',
  title: 'Laptop',
  amount: 800.97,
  date: new Date(2021,6,12),
  },
  ]; 

  const App = () => {

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) =>{
        setExpenses (( prevExpenses) => {

          return [expense, ...prevExpenses];
        });

  };

  return (
    <div>
      <NewExpense onAddExpense ={addExpenseHandler}/>
       <Expenses items={expenses}/>
   </div>
  );
}

export default App;
