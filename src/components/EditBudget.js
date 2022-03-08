import React, { useState } from 'react';

const EditBudget = (props) => {
    const [value, setValue] = useState(props.budget);
  return (
    <div>
     <input type="number"  id="name" 
     className='form-control mr-5'
     value={value} required='required'
     onChange={(event) => setValue(event.target.value)}
     />
     <button type="button" 
     className='btn btn-primary mt-3'
     onClick={() => props.saveNewBudget(value)}>Save</button>
     
   </div>
   );
};

export default EditBudget;
