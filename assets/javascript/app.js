// global vars
var topics = ["bear", "camel", "chicken", "duck", "giraffe", "hippo",
              "grumpy cat", "kangaroo", "koala", "otter", "panda",
              "sheep", "tiger", "turtle", "unicorn"];

// function to do api calls

// function to display gifs
var gifTastic = {
    //method to add buttons
    addButton : function (gif) {
        var btn = $("<button>").text(gif)
        $("#gif-buttons").append(btn)
    },

    getData : function(gif) {
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=wv4iP1f8xEfchiArmZMS4oeh0FtMM5uH&q=" + gif + "&limit=10&offset=0&rating=G&lang=en";
        $.ajax({
            url: queryURL,
            method: "GET",
            success: function(result){
                console.log(result.data)
            }
        });
    }
};
gifTastic.getData("bear")
/////////////////////////////////////
$( window ).on( "load", function() {
    topics.forEach(topic => {gifTastic.addButton(topic)});
});

// on click when adding new button
$(document).on( "click", "#add-btn", function(event){
    var newGif = $("#gif").val()
    if(newGif && topics.includes(newGif) === false) {
        event.preventDefault();
        console.log(newGif)
        gifTastic.addButton(newGif)
        $("#gif").val("")
    } else {
        event.preventDefault();
        $("#gif").val("")
    }
});

// // on click to display gifs
// $(document).on( "click", ".add-gifs", function(){
//     // do things
// } );
// // on click to remove button
// $(document).on( "click", ".del-btn", function(){
//     // do things
// } );