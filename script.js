

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

$("textarea").each(function () {
    var timeBlock = parseInt($(this).attr("id"));
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
// function updateHours() {
//     //get current hour
//     for (hour = 9; hour < 18; hour++) {
        

//         var timeCategory;
//         if (currentHour > hour) {
//             $(".time-block").addClass("past");
//             $(".time-block").removeClass("future");
//             $(".time-block").removeClass("present")
//         } else if (currentHour === hour) {
//             $(".time-block").addClass("present")
//             $(".time-block").removeClass("present");
//             $(".time-block").removeClass("future")
//         }else {
//             $(".time-block").addClass("future")
//             $(".time-block").removeClass("past");
//             $(".time-block").removeClass("future");
//         }
//     }
     
// }
// updateHours(); 


//Add click event to save button 
$(".saveBtn").on("click", function () {
        console.log("Save button clicked!");
        //Create a variable to house the user input entered in the text area (using JQuery version of get element by ID and textContent.value)
        var taskEntered = $(".saveBtn").siblings(".description").val(); 
        //Create a variable to store the time block associated with the save button (The div parent that the save button div is stored in; the ID attribute represents the hour number)
        var hour = $(".saveBtn").parent().attr("id");

//Set item in local storage
    localStorage.setItem(hour, taskEntered);
    }) 

    //Locate the time block and retreive the value of user input / text area associated with it (using JQuery version of get element by ID and textContent.value)

    $("#9.description").val(localStorage.getItem("9"));
    $("#10.description").val(localStorage.getItem("10"));
    $("11.description").val(localStorage.getItem("11"));
    $("#12.description").val(localStorage.getItem("12"));
    $("#13.description").val(localStorage.getItem("13"));
    $("#14.description").val(localStorage.getItem("14"));
    $("#15.description").val(localStorage.getItem("15"));
    $("#16.description").val(localStorage.getItem("16"));
    $("#17.description").val(localStorage.getItem("17"));
    

    
