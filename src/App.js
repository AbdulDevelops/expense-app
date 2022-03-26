import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import React from 'react';
import Card from './components/UI/Card';
import NewExpense from './components/NewExpenses/NewExpense';


const App = () => {
 const expenses = [
  {
     id: 'e1',
    title: 'Toilet Paper',
    amount: 16.97,
    date: new Date(2021,2,12),
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

  return (
    <div>
      <NewExpense></NewExpense>
       <Expenses items={expenses}/>
   </div>
  );
}

export default App;
