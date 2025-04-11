/**
 * Minimal Approach to The solution with custom UI.
 * This involves using objects and eventlisteners to get a grasp of state management.
u * A basic model to build pon before implementing a minimal Redux design to the solution .
 * The challenge requires a minimal approach and hence no redux library will be used.
 * The aim is to build upon existing knowledge and add an extra layer
 * */

/*Enforce strict rules*/
"use strict";

//Store object -  Store Redux
const store = 
{
    value: 0, //The initial State

    //Store methods - Actions Redux
    getState: function(){ return this.value},
    
    //
    dispatchAdd: function()
    {
        this.value += 1;
    },
    dispatchSubtract: function()
    {
        this.value -= 1;
    },
    reset: function()
    {
        this.value = 0;
    }

}

//const {getState, dispatchSubtract, dispatchAdd, reset} = store;
const elements = 
{
    elCounterText: document.querySelector('span'),
    elBtnIncrement: document.getElementById('btn-increment'),
    elBtnDecrement: document.getElementById('btn-decrement'),
    elBtnResetCounter: document.getElementById('btn-reset')
}
//const {elCounterText, elBtnIncrement, elBtnDecrement, elBtnResetCounter} = elements

//Subscribes - Actions in Redux
function subscriber(elements,store)
{

    //Add value 1 to the store
    elements.elBtnIncrement.addEventListener('click', () => 
        {
            store.dispatchAdd();
            elements.elCounterText.textContent = store.getState();
        });

    //Substract value 1 from the store
    elements.elBtnDecrement.addEventListener('click', () => 
        {
            store.dispatchSubtract();
            elements.elCounterText.textContent = store.getState();
        });

    //Reset value to 0 inside the store
    elements.elBtnResetCounter.addEventListener('click', () => 
        {
            store.reset();
            elements.elCounterText.textContent = store.getState();
        });
}
//Load Program Execution
document.addEventListener('DOMContentLoaded', () => 
    {
        //The subscriber are being used to manipulates events in our store through eventlisteners
        subscriber(elements,store);
        elements.elCounterText.textContent = store.getState();
    });

   
/*----------------------------User Stories----------------------------------- */
/**
 * Program solution using objects and functions to retain state although not reliable
 */

console.log('\nTally App User Stories\n------------------------------------\n');

//Scenerio 1: Initial State Verification
console.log('Scenerio 1: ' + store.getState()); 

//Scenerio 2: Incrementing the counter
store.dispatchAdd();
store.dispatchAdd();
console.log('Scenerio 2: ' + store.getState());


//Scenario 3: Decrementing the counter 
store.dispatchSubtract();
console.log('scenario 3: ' + store.getState());

//Scenario 4: Resetting the counter 
store.reset();
console.log('scenario 4: ' + store.getState());

