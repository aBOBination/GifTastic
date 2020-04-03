// global vars
var gifSet = new Set([]);
var newGif = [];
// function to do api calls

// function to display gifs
var gifTastic = {
    addButton : function (gif) {
        if(gif) {
            var btn = $("<button>").text(gif)
            $("#gif-buttons").append(btn)
            gifSet.add(gif)
            console.log(gifSet)
        }
    },


}
// function to add buttons
// var addButton = function (gif) {
//     if(gif) {
//         var btn = $("<button>").text(gif)
//         $("#gif-buttons").append(btn)
//     }
// }

/////////////////////////////////////
window.onload = function() {
    this.gifSet.forEach(this.gifTastic.addButton)
    // for(var i = 0; i < gifSet.length; i++) {
    //     gifTastic.addButton(gifSet[i])

};

// on click when adding new button
$(document).on( "click", "#add-gif", function(event){
    event.preventDefault();
    gifTastic.addButton($("#gif").val().toLowerCase())
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