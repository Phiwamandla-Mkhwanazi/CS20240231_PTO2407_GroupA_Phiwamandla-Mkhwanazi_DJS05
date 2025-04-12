/**
 * Minimal custom Redux-like implementation with a basic UI.
 * This is a foundational model to build upon without using external libraries.
 * The goal is to enhance core understanding before layering more complex designs.
 */


//Imports
import reducer from './reducer.js';
import actions from './actions.js';
import createStore from './store.js';

"use strict";

// Initialize Store
const store = createStore(reducer);

/*------------------------------------ User Stories (Test Scenarios) ------------------------------------*/

// Counter for tracking which scenario we're in (for demonstration/logging purposes)
let scenarioCount = 1;

// Log initial state as Scenario 1
console.log(`Scenario 1:`, store.getState());
// Subscriber to log state changes after each action dispatch (used in test scenarios)
store.subscribe(() => {
    if (scenarioCount === 1) {
      // For Scenario 2,Simulates pressing "Add" once but will not log.
      scenarioCount++
    } else {
      // For all subsequent scenarios, log with the scenario count
      console.log(`Scenario ${scenarioCount++}:`, store.getState());
    }
  });

// === The user story simulations using dispatch ===
// Simulates pressing "Add" once
store.dispatch(actions.add());     // Scenario 1: Expect counter to be 1

// Simulates pressing "Add" again
store.dispatch(actions.add());     // Scenario 2: Expect counter to be 2

// Simulates pressing "Subtract"
store.dispatch(actions.subtract()); // Scenario 3: Expect counter to be 1

// Simulates pressing "Reset"
store.dispatch(actions.reset());   // Scenario 4: Expect counter to be 0



/*---------------------------------------- UI Layer -----------------------------------------------------*/

let elements = {};

if (typeof document !== 'undefined') {
  elements = {
    elCounterText: document.querySelector('span'),
    elBtnIncrement: document.getElementById('btn-increment'),
    elBtnDecrement: document.getElementById('btn-decrement'),
    elBtnResetCounter: document.getElementById('btn-reset'),
  };
}

// UI Dispatch Binding
function subscriber(elements, store) {
  elements.elBtnIncrement.addEventListener('click', () => store.dispatch(actions.add()));
  elements.elBtnDecrement.addEventListener('click', () => store.dispatch(actions.subtract()));
  elements.elBtnResetCounter.addEventListener('click', () => store.dispatch(actions.reset()));
}

/*---------------------------------- Main Execution------------------------------------------------------*/

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      // Wire up UI
      subscriber(elements, store);
  
      // Subscribe to store updates and render state to DOM
      store.subscribe(() => {
        if (elements.elCounterText) {
          elements.elCounterText.textContent = store.getState();
        }
      });
  
      // Initial render
      if (elements.elCounterText) {
        elements.elCounterText.textContent = store.getState();
      }
    });
  }