/**
 * @module actions
 * @description Action creators for modifying the counter state.
 * Each function returns a plain action object with a specific type.
 */

/**
 * Creates an action to increment the counter.
 * @returns {{ type: string }} Action object with type 'ADD'.
 */
const add = () => ({ type: 'ADD' });

/**
 * Creates an action to decrement the counter.
 * @returns {{ type: string }} Action object with type 'SUBTRACT'.
 */
const subtract = () => ({ type: 'SUBTRACT' });

/**
 * Creates an action to reset the counter.
 * @returns {{ type: string }} Action object with type 'RESET'.
 */
const reset = () => ({ type: 'RESET' });


//Action creators container
const actions = {
  add,
  subtract,
  reset,
};

export default actions;
