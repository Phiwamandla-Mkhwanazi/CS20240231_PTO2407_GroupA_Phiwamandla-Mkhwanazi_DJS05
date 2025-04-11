/**
 * Minimal Approach to The solution with custom UI.
 * A basic model to build upon before implementing a minimal Redux design to the solution .
 * The challenge requires a minimal approach and hence no redux library will be used.
 * The aim is to build upon existing knowledge and add an extra layer
 * */

/*Enforce strict rules*/
"use strict";

//1. Reducer function
function reducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return state + 1;
      case 'SUBTRACT':
        return state - 1;
      case 'RESET':
        return 0;
      default:
        return state;
    }
  }

//2. Create a store factory that uses a reducer
const createStore = function (reducer) {
    let state = 0;

    return {
        // Return the current state
        getState: () => state,
    
        // Accept an action object and update the state using the reducer
        dispatch: action => {
          state = reducer(state, action);
        }
      };
};

// Create store
const store = createStore(reducer);


//3. DOM Elements
const elements = 
{
    elCounterText: document.querySelector('span'),
    elBtnIncrement: document.getElementById('btn-increment'),
    elBtnDecrement: document.getElementById('btn-decrement'),
    elBtnResetCounter: document.getElementById('btn-reset')
}


//4. Subscriber that wires up UI with store
function subscriber(elements,store)
{

    //Add value 1 to the store
    elements.elBtnIncrement.addEventListener('click', () => 
        {
            store.dispatch({ type: 'ADD' });
            elements.elCounterText.textContent = store.getState();
        });

    //Substract value 1 from the store
    elements.elBtnDecrement.addEventListener('click', () => 
        {
            store.dispatch({ type: 'SUBTRACT' });
            elements.elCounterText.textContent = store.getState();
        });

    //Reset value to 0 inside the store
    elements.elBtnResetCounter.addEventListener('click', () => 
        {
            store.dispatch({ type: 'RESET' });
            elements.elCounterText.textContent = store.getState();
        });
}


//5. Load program execution after DOM content has loaded
document.addEventListener('DOMContentLoaded', () => 
    {
        subscriber(elements,store);
        elements.elCounterText.textContent = store.getState();
    });

   
/*----------------------------User Stories----------------------------------- */

console.log('\nTally App User Stories\n------------------------------------\n');

//Scenerio 1: Initial State Verification
console.log('Scenerio 1: ' + store.getState()); 

//Scenerio 2: Incrementing the counter
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'ADD' });
console.log('Scenerio 2: ' + store.getState());


//Scenario 3: Decrementing the counter 
store.dispatch({ type: 'SUBTRACT' });
console.log('scenario 3: ' + store.getState());

//Scenario 4: Resetting the counter 
store.dispatch({ type: 'RESET' });
console.log('scenario 4: ' + store.getState());

