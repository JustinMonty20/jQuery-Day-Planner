// time variables
var now = moment().format("dddd, MMM Do");
var currentHour = new Date().getHours();
$("#currentDay").html(now);
   

// changing the css based on the hours
$("input").each(function () {
    var elementHour = $(this).attr("data-hour")
    if(currentHour === elementHour) {
        $(this).addClass("present")
    } else if (currentHour > elementHour) {
        $(this).addClass("future")
    } else {
        $(this).addClass("past")
    }
})

// ask about this in the morning !!!
$(".saveBtn").on("click", function (){
    var whichHour = $(this).sibling().attr("data-hour")
    var storedText = $(this).sibling().find("input").val()
    localStorage.setItem(whichHour, storedText)
})