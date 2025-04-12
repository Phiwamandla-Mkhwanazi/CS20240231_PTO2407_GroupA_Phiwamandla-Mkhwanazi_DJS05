"use strict"; // Enforce strict mode for better error handling and cleaner JS

// Import modules
import reducer from './reducer.js';      // Reducer: Handles how state changes based on action
import actions from './actions.js';      // Action creators: Produces standardized action objects
import createStore from './store.js';    // Store factory: Custom Redux-like state manager

//Scenario tracking variable for console output labeling and Starts at 1 to match user story scenario numbering.
let scenarioCount = 1;


//Create the application store with the imported reducer.
const store = createStore(reducer);

//Subscribe to store changes and Logs the state to the console after every dispatch except the initial one.
store.subscribe(() => {
  if (scenarioCount === 1) {
    // Skip logging for first dispatch because Scenario 1 is already printed manually.
    scenarioCount++;
  } else {
    console.log(`Scenario ${scenarioCount++}:`, store.getState());
  }
});

console.log(`Scenario 1:`, store.getState());    // Expect: 0 (Scenario 1)
store.dispatch(actions.add());                   // Expect: 1 (Scenario 2, but will not print)
store.dispatch(actions.add());                   // Expect: 2 (Scenario 2)
store.dispatch(actions.subtract());              // Expect: 1 (Scenario 3)
store.dispatch(actions.reset());                 // Expect: 0 (Scenario 4)
