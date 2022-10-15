import './ExpensesFilter.css';
import React from 'react';


const ExpensesFilter =(props) =>
{   const dropdownChangeHandler = (event) => {
     props.onChangeFilter(event.target.value)
};

     return (
        <div className='Expenses-filter'>
            <div className='Expesne-filter_control'>
                <label>Filter by the year</label>
                <select value={"props.selected"} onChange={dropdownChangeHandler}>
                    <option value='2019'>2019</option>
                    <option value='2020'>2020</option>
                    <option value='2021'>2021</option>
                    <option value='2022'>2022</option>
                </select>
            </div>
        </div>
         
     );
}
export default ExpensesFilter;