
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

var activeHours = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];




/*
Functions
*/

  // create div per hour we're interested in, represented inside arr- activeHours
for (i = 0; i <activeHours.length; i++){
    element = document.createElement('div');
    element.className = ' row hour';
    element.innerHTML = activeHours[i];
    document.getElementsByClassName('container')[0].appendChild(element);
}



/*
Events
*/

/*
Entry Points
*/