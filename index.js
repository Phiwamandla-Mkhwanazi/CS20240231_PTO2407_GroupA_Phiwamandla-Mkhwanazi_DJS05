/**
 * Minimal custom Redux-like implementation with a basic UI.
 * This is a foundational model to build upon without using external libraries.
 * The goal is to enhance core understanding before layering more complex designs.
 */

"use strict";

/*------------------------------------ Redux-Like Core --------------------------------------------------*/

// Reducer: handles state transitions
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

// Action Creators
const actions = {
  add: () => ({ type: 'ADD' }),
  subtract: () => ({ type: 'SUBTRACT' }),
  reset: () => ({ type: 'RESET' }),
};

// Store Factory
const createStore = function (reducer) {
  let state = 0;
  const listeners = []; // Stores all subscriber callbacks (e.g., UI updates)

  return {
    getState: () => state,

    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener()); // Notify all subscribers
    },

    subscribe: (listener) => listeners.push(listener) // Register subscriber
  };
};

// Initialize Store
const store = createStore(reducer);

/*------------------------------------ User Stories (Test Scenarios) ------------------------------------*/

// Counter for tracking which scenario we're in (for demonstration/logging purposes)
let scenarioCount = 1;

// Subscriber to log state changes after each action dispatch (used in test scenarios)
store.subscribe(() => {
  console.log(`Scenario ${scenarioCount++}:`, store.getState());
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

// DOM Elements
const elements = {
  elCounterText: document.querySelector('span'),
  elBtnIncrement: document.getElementById('btn-increment'),
  elBtnDecrement: document.getElementById('btn-decrement'),
  elBtnResetCounter: document.getElementById('btn-reset'),
};

// UI Dispatch Binding
function subscriber(elements, store) {
  elements.elBtnIncrement.addEventListener('click', () => store.dispatch(actions.add()));
  elements.elBtnDecrement.addEventListener('click', () => store.dispatch(actions.subtract()));
  elements.elBtnResetCounter.addEventListener('click', () => store.dispatch(actions.reset()));
}

/*---------------------------------- Main Execution------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', () => {
  // Wire up UI
  subscriber(elements, store);

  // Subscribe to store updates and render state to DOM
  store.subscribe(() => {
    elements.elCounterText.textContent = store.getState();
  });

  // Initial render
  elements.elCounterText.textContent = store.getState();
});
