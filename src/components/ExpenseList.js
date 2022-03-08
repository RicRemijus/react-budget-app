import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const {expenses} = useContext(AppContext);
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);

    
    useEffect(() => {
        setFilteredExpenses(expenses);
    }, [expenses]);

    const handleChange = e => {
        const searchResults = expenses.filter((filteredExpense)=>
               filteredExpense.name.toLowerCase().includes(e.target.value)
        );
        setFilteredExpenses(searchResults)
    };

    
    return (
        <>
        <p className='modal-footer bg-success'>  You have {expenses.length} item so far </p> 
    
        <input type="text" 
        onChange={handleChange}
        className='form-control mb-2 mr-sm-2'
        placeholder='Search for Expense Items...'
        />
        <ul className="list-group mt-3 mb-3">
            {filteredExpenses.map((expense)=>(
                <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} dateValue={expense.dateValue}/>
            ))}
        </ul> 
        </>
    )
}

export default ExpenseList;
