import React, { useContext } from 'react';
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const {dispatch} = useContext(AppContext);
    
    
    const handleDelete = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center  bg-secondary">
            {props.name}
            <div>
                <span className="badge badge-info rounded mr-3">
                &#x20A6; {props.cost}
                </span>
               <span className="badge badge-light rounded mr-3">
               {props.dateValue }
               </span>
                <TiDelete className='bg-danger rounded-circle'  size='2em' onClick={handleDelete}></TiDelete>
            </div>
        </li>
    )
}

export default ExpenseItem;
