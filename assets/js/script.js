
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
var currentTime = moment().format('HH');

var activeHours = [
    // {hour: '00',},
    // {hour: '01',},
    // {hour: '02',},
    // {hour: '03',},
    // {hour: '04',},
    // {hour: '05',},
    // {hour: '06',},
    // {hour: '07',},
    // {hour: '08',},
    // {hour: '09',}, 
    // {hour: '10',}, 
    // {hour: '11',},
    // {hour: '12',}, 
    // {hour: '13',}, 
    // {hour: '14',},
    // {hour: '15',}, 
    {hour: '16',}, 
    {hour: '17',},
    {hour: '18',},
    {hour: '19',},
    {hour: '20',},
    {hour: '21',},
    {hour: '22',},
    {hour: '23',},
];

/*
Functions
*/

// adds day to top of page

function revealTime(){
    var headerDate = moment().format('dddd MMMM Do YYYY HH mm');
    $("#currentDay").text(headerDate);
}

revealTime()

// generate each hour's spaces on the page
activeHours.forEach(function (dewIt){ 
    //creates the rows to populate  
    //defines the area we want to interact with
    var planDay = $('.container');
    //creates new element
    var hourRow = $('<div>');
    //adds the css to the element
    hourRow.addClass("row");
    //applies it to the page
    planDay.append(hourRow);
    
    // adds the individual hours to the space
    // creates the new element
    var hourList = $('<div>');
    //adds the css to the element
    hourList.addClass("col-1 hour");
    //pulls the indvidual text from the array, based on the key
    hourList.text(dewIt.hour);
    //creates the new element on the page
    hourRow.append(hourList);
   
    // adds the event saved to the rows
    // creates the new element
    var hourEvent = $('<textarea>');
    //dynamically add css based on if the hour is before, ===, or after the currentTime
    if(dewIt.hour === currentTime){
        hourEvent.addClass("col-10 description present")
    }else if(dewIt.hour > currentTime) {
        hourEvent.addClass("col-10 description future")
    }else if(dewIt.hour < currentTime){
        hourEvent.addClass("col-10 description past")
    };
    //adds the element to the page
    hourRow.append(hourEvent);
    
    //adds the save buttons to the rows
    //creates the new element
    var saveEvent = $('<button>');
    //adds the css to the element
    saveEvent.addClass('col-1 saveBtn');
    //adds element to the page
    hourRow.append(saveEvent);
});


/*
Events
*/

// event listener on saveBtn 


/*
Entry Points
*/