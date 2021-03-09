/*
Global Variables
*/

var today = moment().format('dddd MMMM Do YYYY');
var currentTime = moment().format('HH');

var activeHours = [
    {hour: '09',
    schedule: '',}, 
    {hour: '10',
    schedule: '',}, 
    {hour: '11',
    schedule: '',},
    {hour: '12',
    schedule: '',}, 
    {hour: '13',
    schedule: '',}, 
    {hour: '14',
    schedule: '',},
    {hour: '15',
    schedule: '',}, 
    {hour: '16',
    schedule: '',}, 
    {hour: '17',
    schedule: '',},
];

var savedEvent = JSON.parse(localStorage.getItem('savedEvent')) || [];

/*
Functions
*/

// adds day to top of page
function revealTime(){
    var headerDate = moment().format('dddd MMMM Do YYYY HH mm');
    $("#currentDay").text(headerDate);
}

revealTime()

//moving information from savedEvent to activeHours
//sets index points for activeHours
for (let i = 0; i < activeHours.length; i++){ 
    //sets index points for savedEvent 
    for(let j = 0; j < savedEvent.length; j++){
        //compares the indexed points of activeHours and savedEvent to find the matching
        if(activeHours[i].hour === savedEvent[j].numArea){
            //replace activeHours.schedule with savedEvent.information
            activeHours[i].schedule = savedEvent[j].information;
        };
    };
};

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
        hourEvent.addClass("col-10 time-block description present")
    }else if(dewIt.hour > currentTime) {
        hourEvent.addClass("col-10 time-block description future")
    }else if(dewIt.hour < currentTime){
        hourEvent.addClass("col-10 time-block description past")
    };
    //pull the saved data for the .textcontent
    hourEvent.text(dewIt.schedule);
    //adds the element to the page
    hourRow.append(hourEvent);
    
    //adds the save buttons to the rows
    //creates the new element
    var saveEvent = $('<button>');
    // add icon to files
    var saveIcon = $('<i class="far fa-save">');
    //adds the css to the button
    saveEvent.addClass('col-1 saveBtn');
    //adds icon to button
    saveEvent.append(saveIcon);
    //adds button to the page
    hourRow.append(saveEvent);
});


// function design to save events
//for the save buttons, listen for click, then run function on that event
$(".saveBtn").on('click', function(event){
    //prevent default (reload)
    event.preventDefault();

    //collect the event information and the hour it's attached to:
    var scheduledEvent = {
        information: $(this).siblings("textarea").val(),
        numArea: $(this).siblings(".hour").text(),
    };

    //push the saved information to storage
    savedEvent.push(scheduledEvent);
    localStorage.setItem('savedEvent',JSON.stringify(savedEvent));
});