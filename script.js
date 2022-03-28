//Current day and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

//Current Hour
var currentHour = moment().hour();
console.log("The current hour is ", currentHour);

var task9AM = $("#9");
var task10AM = $("#10");
var task11AM = $("#11");
var task12PM = $("#12");
var task1PM = $("#13");
var task2PM = $("#14");
var task3PM = $("#15");
var task4PM = $("#16");
var task5PM = $("#17");


//Change background color according to past, present, future tasks

function updateHours() {

$("textarea").each(function () {
    var timeBlock = $(this).attr("id");
    console.log("current hour", timeBlock)
    if (timeBlock < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (timeBlock > currentHour) {
        $(this).addClass("future")
        $(this).removeClass("past");
        $(this).removeClass("present");
    } else {
        $(this).addClass("present");
        $(this).removeClass("past");
        $(this).removeClass("future");
    }

})

} updateHours()

//Add click event to save button 
$(".saveBtn").on("click", function () {
        console.log("Save button clicked!");
        //Create a variable to house the user input entered in the text area (using JQuery version of get element by ID and textContent.value)
        var taskEntered = $(this).siblings(".description").val();
        //Create a variable to store the time block associated with the save button (The div parent that the save button div is stored in; the ID attribute represents the hour number)
        var timeBlock = $(this).parent().attr("id"); 

//Set items in local storage
    localStorage.setItem(timeBlock, taskEntered);
    }) 
    
//Get stored data from local storage (if any) and make it stay on the screen when page is refreshed.
    task9AM.append(localStorage.getItem("9"));
    task10AM.append(localStorage.getItem("10"));
    task11AM.append(localStorage.getItem("11"));
    task12PM.append(localStorage.getItem("12"));
    task1PM.append(localStorage.getItem("13"));
    task2PM.append(localStorage.getItem("14"));
    task3PM.append(localStorage.getItem("15"));
    task4PM.append(localStorage.getItem("16"));
    task5PM.append(localStorage.getItem("17"));

        

    
