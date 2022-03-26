import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';
import { useState } from 'react';

const  ExpenseItem = (props) => {

    const [title,   setTitle] = useState(props.title);
    
    const clickHandler = () =>
    { 
       setTitle('Updatedtitle');
       console.log(title);

    };
   
  return (
 <Card className='expense-item'>
   <ExpenseDate date= {props.date}/>
   <div>
     <h2>{title}</h2>
   </div>
   
    <div className="expense-item_description">
     
      <div className="expense-item_price">${props.amount}</div>
   
    </div>
    <button onClick={clickHandler}>Change Title</button>
    
  </Card>


  );

}
export default ExpenseItem;