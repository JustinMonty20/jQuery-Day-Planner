// time variables
moment().format("dddd, MMM Do");

var date = new Date()
var currentHour = date.getHours()


$("#currentDay").html(moment().format("dddd, MMM Do"));
   

// changing the css based on the hours
$("textarea").each(function (i) {
    var todo = localStorage.getItem('hour-'+(i+9))
    console.log(todo)
    if(todo){
        $("#textArea"+(i+9)).val(todo)
    }
    var elementHour = $(this).attr("data-hour")
    if(currentHour == elementHour) {
        $(this).addClass("present")
    } else if (currentHour < elementHour) {
        $(this).addClass("future")
    } else {
        $(this).addClass("past")
    }
})

// ask about this in the morning !!!
$(".saveBtn").on("click", function (){
    // var whichHour = $(this).sibling().attr("data-hour")
    // var storedText = $(this).sibling().find("input").val()
    // localStorage.setItem(whichHour, storedText)
    var hour = $(this).val()
    var todo = $("#textArea"+hour).val()
    console.log(hour, todo)
    if(todo){
        localStorage.setItem("hour-"+hour, todo)
    }
})