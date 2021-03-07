
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
var currentTime = moment().format('HH mm');

var activeHours = [
    {hour: '9'}, 
    {hour:'10'}, 
    {hour: '11'},
    {hour: '12'}, 
    {hour: '13'}, 
    {hour:'14'},
    {hour: '15'}, 
    {hour:'16'}, 
    {hour:'17'},
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

// generate each hour's spaces


activeHours.forEach(function (dewIt){ 
    var planDay = $('.container');
    var hourRow = $('<div>');
    hourRow.addClass("row");
    // planDay.append(hourRow);
    
    var hourList = $('<div>');
    hourList.addClass(" col-md-1 hour");
    hourList.text(activeHours.hour);
    hourRow.append(hourList);
    planDay.append(hourRow);
});

// row 
// hours 
// entry
// saveBtn



/*
Events
*/

/*
Entry Points
*/