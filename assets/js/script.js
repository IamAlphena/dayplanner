
//On Page Load, Current Day and Time is displayed 

// timeblocks for standard business hours 
    //  9 - 17

// Timeblock dynamically pulls from CSS
    // logic loop to apply css 
    // past / present / future classes

//Click on block
    //eventListener 'click' per div

//Enter event
    // widget? or through text entry

//Save events in local storage
    //json stringify 

// refresh page, events persist
    // parse and print

/*
Global Variable
*/

var today = moment().format('dddd MMMM Do YYYY');
var currentTime = moment().format('HH m');

var hours = []

/*
Functions
*/
console.log(today);

/*
Events
*/

/*
Entry Points
*/