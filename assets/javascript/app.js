// global vars
var topics = ["bear", "camel", "chicken", "duck", "giraffe", "hippo", "grumpy cat", "kangaroo", "koala", "otter", "panda", "sheep", "tiger", "turtle", "unicorn"];

// function to do api calls

// function to display gifs

// function to add buttons
var addButton = function (gif) {
        var btn = $("<button>").text(gif)
        $("#gif-buttons").append(btn)
}

/////////////////////////////////////
window.onload = function() {
    for(var i = 0; i < topics.length; i++) {
        addButton(topics[i])
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