const createStore = function (reducer) {
    let state = 0;
    const listeners = []; 
  
    return {
      getState: () => state,
  
      dispatch: (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener()); 
      },
      
      subscribe: (listener) => {
          listeners.push(listener);
          return () => {
              const index = listeners.indexOf(listener);
              if (index > -1) listeners.splice(index, 1);
            }} 
    };
  };

export default createStore;