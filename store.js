/**
 * @module store
 * @description A minimal custom Redux-like store implementation.
 * Provides centralized state management with dispatching and subscription capabilities.
 */

/**
 * Creates a Redux-like store to manage application state.
 * 
 * @param {Function} reducer - A reducer function that receives state and action and returns new state.
 * @returns {{
*   getState: () => any,
*   dispatch: (action: { type: string }) => void,
*   subscribe: (listener: Function) => () => void
* }} The store object with state management methods.
*/


const createStore = function (reducer) {
  let state = 0;
  const listeners = []; // Registered subscribers

  return {
    /**
    * Retrieves the current state of the store.
    * @returns {any} Current state.
    */
    getState: () => state,

    /**
    * Dispatches an action to modify the state via the reducer.
    * Notifies all subscribed listeners after state changes.
    * @param {{ type: string }} action - Action object with a type.
    */
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    },

    /**
    * Subscribes a listener function that gets called on every dispatch.
    * @param {Function} listener - Function to call when state changes.
    * @returns {Function} Unsubscribe function to remove the listener.
    */
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        if (index > -1) listeners.splice(index, 1);
      };
    }
  };
};

export default createStore;
