import React from 'react';

const ViewBudget = (props) => {
  return (
      <div>
         <span>Budget :  {props.budget}</span>
         <button type="button" className='btn btn-danger ml-5' onClick={props.editBudget}>Edit</button>
      </div>
      );
};

export default ViewBudget;
