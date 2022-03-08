import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';

const Budget = () => {
  const {budget, dispatch} = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false)
  
     
  const editBudget = () => {
        setIsEditing(true);
        
    };
  
 const saveNewBudget = (value) =>{
     dispatch({
         type: 'SET_BUDGET',
         payload: value,
     });
     setIsEditing(false);
 } ;
    
    return (
        <div className="alert alert-secondary ">
           {isEditing ? (
               <EditBudget saveNewBudget={saveNewBudget} budget={budget}/>
           ):(
               <ViewBudget editBudget={editBudget} budget={budget}/>
           )}
        </div>
    );
};

export default Budget;
