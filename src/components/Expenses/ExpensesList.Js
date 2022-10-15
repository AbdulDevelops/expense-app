import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props => {

    // let expensesContent = <p>no expenses found</p>;
    if (props.items.length > 0)
     
    { return <h2 className='expenses-list_fallback'> Found No expenses! </h2>;
     }
     return(
         <ul className='expenses-List'>
             {props.items.map((expense)=>(
         
       <ExpenseItem  
         key={expense.id}
         title={expense.title} 
         amount={expense.amount} 
         date={expense.date}
        />
     ))};
     </ul>


     );

}
export default ExpensesList;