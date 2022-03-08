import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Balance = () => {
    const {expenses, budget} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item)=>{
        return(total = total + item.cost);
    }, 0);

    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-warning';
    return (
        <div className={`alert p-4 ${alertType}`}>
            <span>Balance :  &#x20A6; {budget - totalExpenses}</span>
        </div>
    )
}

export default Balance;
