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

console.log('\nTally App User Stories\n------------------------------------\n');

console.log('Scenario 1 :', store.getState());

store.dispatch(actions.add());
store.dispatch(actions.add());
console.log('Scenario 2 :', store.getState());

store.dispatch(actions.subtract());
console.log('Scenario 3 :', store.getState());

store.dispatch(actions.reset());
console.log('Scenario 4 :', store.getState());

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
