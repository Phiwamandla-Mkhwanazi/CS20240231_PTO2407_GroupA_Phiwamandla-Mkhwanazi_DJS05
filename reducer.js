/**
 * @function reducer
 * @description Pure function that calculates the next state based on the current state and dispatched action.
 * @param {number} state - The current state of the application.
 * @param {Object} action - An object representing the dispatched action.
 * @param {string} action.type - The type of action to process.
 * @returns {number} The new state after applying the action.
 */

export default function reducer(state, action) {
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
  