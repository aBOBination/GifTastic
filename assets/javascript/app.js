// global vars
var newSet = new Set(["bear", "cat", "cat"]);
var gifArr = Array.from(newSet)

// function to do api calls

// function to display gifs

// function to add buttons
var addButton = function (gif) {
    if(gif) {
        var btn = $("<button>").text(gif)
        $("#gif-buttons").append(btn)
    }
}

/////////////////////////////////////
window.onload = function() {
    for(var i = 0; i < gifArr.length; i++) {
        addButton(gifArr[i])
    }
};

// on click when adding new button
$(document).on( "click", "#add-gif", function(event){
    event.preventDefault();
    addButton($("#gif").val())
    $("#gif").val("")

} );
// on click to display gifs
$(document).on( "click", ".add-btn", function(){
    // do things
} );
// on click to remove button
$(document).on( "click", ".del-btn", function(){
    // do things
} );