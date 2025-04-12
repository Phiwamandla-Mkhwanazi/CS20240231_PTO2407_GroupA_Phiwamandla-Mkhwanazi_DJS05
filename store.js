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
      
      // Register subscriber
      subscribe: (listener) => {
          listeners.push(listener);
          return () => {
              const index = listeners.indexOf(listener);
              if (index > -1) listeners.splice(index, 1);
            }} 
    };
  };