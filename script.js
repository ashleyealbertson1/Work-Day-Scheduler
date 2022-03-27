

//Current day and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));


function updateHours() {
    //get current hour
    for (hour = 9; hour < 18; hour++) {
        var currentHour = moment().hour();
        console.log("The current hour is ", currentHour);

        var timeCategory;
        if (currentHour > hour) {
            $(".time-block").addClass("past");
            $(".time-block").removeClass("future");
            $(".time-block").removeClass("present")
        } else if (currentHour === hour) {
            $(".time-block").addClass("present")
            $(".time-block").removeClass("present");
            $(".time-block").removeClass("future")
        }else {
            $(".time-block").addClass("future")
            $(".time-block").removeClass("past");
            $(".time-block").removeClass("future");
        }
    }
     
}
updateHours(); 


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
    

    