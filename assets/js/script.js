
//Save events in local storage
    //json stringify 

// refresh page, events persist
    // parse and print

var today = moment().format('dddd MMMM Do YYYY');
var currentTime = moment().format('HH');

var activeHours = [
    {hour: '00',
    schedule: '',},
    {hour: '01',
    schedule: '',},
    {hour: '02',
    schedule: '',},
    {hour: '03',
    schedule: '',},
    {hour: '04',
    schedule: '',},
    {hour: '05',
    schedule: '',},
    {hour: '06',
    schedule: '',},
    {hour: '07',
    schedule: '',},
    {hour: '08',
    schedule: '',},
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
    {hour: '18',
    schedule: '',},
    {hour: '19',
    schedule: '',},
    {hour: '20',
    schedule: '',},
    {hour: '21',
    schedule: '',},
    {hour: '22',
    schedule: '',},
    {hour: '23',
    schedule: '',},
];

// var saveBtn = document.querySelector("#saveBtn")
var savedEvent = JSON.parse(localStorage.getItem('savedEvent')) || [];

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
    // add icon to files
    var saveIcon = $('<i class="far fa-save">');
    //adds the css to the button
    saveEvent.addClass('col-1 saveBtn');
    //adds icon to button
    saveEvent.append(saveIcon);
    //adds button to the page
    hourRow.append(saveEvent);
});

// Update schedule information
// function updateSchedule(event){
//     //prevent default (refresh)
//     event.preventDefault();
//     //record information inside hourEvent to local storage
//     // var scheduledEvent = {
//     //     hour: activeHours[i],
//     //     event: hourEvent.value,
//     // };

//     console.log("Hello");
// };

var saveBtn = $('#saveBtn');


$(".saveBtn").on('click', function(event){
    var scheduledEvent = $(this).siblings(".description").value;
    console.log(scheduledEvent);
})
