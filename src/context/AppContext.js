import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

//The Reducer : It's duty is to update the state based on the action applied
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(
                    (expense) => expense.id !== action.payload
                ),
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    }
};
//Set initial state when app loads
const initialState = {
    budget: 20000,
    expenses: [
        { id: uuidv4(), name: 'Shopping', cost: 3050, dateValue :'2021-12-20' },
        { id: uuidv4(), name: 'Holiday', cost: 10000, dateValue : '2022-03-17' },
        { id: uuidv4(), name: 'car service', cost: 2000, dateValue : '2022-04-01' },
    ],
};

//This context will be exported to the component that needs to access it's state
export const AppContext = createContext();

//This Provider will wrap the component we want to give access to the state
//Accepts the children which are the nexted(wrapped) components
export const AppProvider = (props) => {
    //set up the app state, take a reducer and initialize state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    //returns our context and pass in the value we want to expose
    return (
        <AppContext.Provider
            value={{
                // budget: state.budget,
                expenses: state.expenses,
                budget: state.budget,
                dispatch,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};