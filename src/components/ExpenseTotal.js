import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const GrandTotalExpense = () => {
    const {expenses} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=>{
        return(total += item.cost);
    }, 0)
    return (
        <div className="alert alert-success p-4">
            <span > Total Expense :  &#x20A6; {totalExpenses}</span>
        </div>
    )
} 

export default GrandTotalExpense;
