// time variables
var now = moment().format("dddd, MMM Do");
var currentHour = new Date().getHours();
$("#currentDay").html(now);
   

// changing the css based on the hours
$("input").each(function () {
    var elementHour = $(this).attr("data-time")
    if(currentHour > elementHour) {
        $(this).css("background-color","red")
    } else if (currentHour < elementHour) {
        $(this).css("background-color", "green")
    } else {
        $(this).css("background-color", "grey")
    }
})


$(".saveBtn").on("click", function (){
    var whichHour = $(this).sibling().attr("data-hour")
    var storedText = $(this).sibling().find("input").val()
    localStorage.setItem(whichHour, storedText)
})