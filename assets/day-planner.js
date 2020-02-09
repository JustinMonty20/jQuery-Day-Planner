var now = (moment().format("dddd, MMM Do"));

var saveBtn = $("<button class = 'saveBtn'><span><i class='fas fa-save icon-large'></i></span></button>");

$("#currentDay").html(now);



for (i = 0; i < 9; i++) {
   var timeBlocks = $("<div class = 'time-block row'></div>")

   $(".container").append(timeBlocks);


}
$("div").each(function(i){
    var saveBtn = $("<button class = 'saveBtn'><span><i class='fas fa-save icon-large'></i></span></button>");

})