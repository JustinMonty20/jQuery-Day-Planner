var now = (moment().format("dddd, MMM Do"));

var saveBtn = $();

$("#currentDay").html(now);



for (i = 0; i < 9; i++) {
    var timeBlocks = $("<div class = 'time-block row'></div>");
    var saveBtn = $("<button class = 'saveBtn'><span><i class='fas fa-save icon-large'></i></span></button>")
    var timeDisplay = $("<div class ='hour'></div>");
    var textArea = $("<textarea> </textarea>");
    
    // adding bootstrap classes to the specific elements. 
    timeDisplay.addClass("col-md-2");
    textArea.addClass("col-md-8");
    saveBtn.addClass("col-md-2");
  
  
    
    $(".container").append(timeBlocks);
    timeBlocks.prepend(saveBtn);
    timeBlocks.prepend(textArea);
    timeBlocks.prepend(timeDisplay);

}

console.log(timeBlocks)
