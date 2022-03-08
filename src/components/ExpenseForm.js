import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';

const ExpenseForm = () => {
    
    const {dispatch} = useContext(AppContext)

    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [dateValue, setDateValue] = useState(null)
    
  


    const submitForm = (event) =>{
        event.preventDefault();
        
        const expense ={
            id: uuidv4(),
            name,
            cost: parseInt(cost),
            dateValue : new Date(dateValue).toLocaleString()
    
        };
        
        // const addDate = e =>{
        //     let dateValue = e.target.value;
        //     setDateValue(dateValue);
        // }
        
        dispatch({
            type: "ADD_EXPENSE",
            payload: expense,
        });
        setName('')
        setCost('')
        setDateValue('')
    };
    return (
        <>
           
         <form onSubmit={submitForm}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Description</label>
                    <input type="text" 
                    required="required" id="name"
                    className="form-control"
                    placeholder='Enter your expense description ...'
                    value={name}
                    onChange={(event)=> setName(event.target.value)}></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost"> Amount (&#x20A6;)</label>
                    <input type="text" 
                    required="required" id="cost"
                    className="form-control"
                    placeholder='Enter amount...'
                    value={cost}
                    onChange={(event)=> setCost(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="Date">Date</label>
                <input type="date" name="date" id="date" 
                    value={dateValue}
                    className='form-control'
                    required
                    onChange={(event) => setDateValue(event.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <button type="submit" className="btn btn-success  mt-3">Add </button>
                </div>
            </div>
        </form>
        </>
    )
}

export default ExpenseForm;
