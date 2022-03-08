import React, { useState } from 'react';
import { FcOvertime } from 'react-icons/fc'
import 'bootstrap/dist/css/bootstrap.min.css';
import {AppProvider} from './context/AppContext';
import{ Budget, Balance, ExpenseList, ExpenseForm, GrandTotalExpense } from './components'; 


function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  
  setTimeout(() => {
  
    setCurrentTime(new Date().toLocaleString())
  
  }, 1000);

  return (
    <> 
    <AppProvider>     
      <br /> <br />
      <h2 className='d-flex align-items-center justify-content-center'>React Budget App Built with hooks and context api</h2>
    <div className="container bg-dark text-light">
      <h1 className="mt-3 d-flex align-items-center justify-content-center mb-4">Budget app for personal use</h1>
      <p className='d-flex align-items-center justify-content-center mb-4'> < FcOvertime size={40}  /> <h4 className='ml-2 mt-2'> { currentTime }</h4> </p>
      <hr className='modal-footer'/>
      <div className="row mt-3 d-flex align-items-center justify-content-center" >
         <div className="col-8-sm ">
            <Budget />   
          </div>
      </div>
      <div className="row mt-3">
          <div className="col-sm">
            <Balance/>
          </div>
          <div className="col-sm">
            <GrandTotalExpense/>
          </div>
      
      </div>

      <h3 className="mt-3">Add Expense</h3>
    <div className="row mt-3">
      <div className="col-sm">
        <ExpenseForm/>
      </div>
    </div>

    <div className="h3 mt-5">Your Expense List</div>
      <div className="row mt-3">
        <div className="col-sm">
        <ExpenseList  />
      </div>
    </div>
    </div>
    <br /> <br />
    </AppProvider>
    
    </>
  );
}

export default App;
