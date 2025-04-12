"use strict"; //Enforce strict rules

import reducer from './reducer.js';     //Import Module Reducer
import actions from './actions.js';     //Import Module Actions
import createStore from './store.js';   //Import Module Store

let scenarioCount = 1;
const store = createStore(reducer);    


store.subscribe(() => {
    if (scenarioCount === 1) {

      scenarioCount++
    } else {
 
      console.log(`Scenario ${scenarioCount++}:`, store.getState());
    }
  });

console.log(`Scenario 1:`, store.getState())
store.dispatch(actions.add());   
store.dispatch(actions.add());   
store.dispatch(actions.subtract()); 
store.dispatch(actions.reset());   

