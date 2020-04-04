var topics = ['BEAR', 'CAMEL', 'CHICKEN', 'DUCK', 'GIRAFFE', 'HIPPO', 'GRUMPY CAT', 'KANGAROO', 'KOALA', 'OTTER', 'PANDA', 'SHEEP', 'TIGER', 'TURTLE', 'UNICORN'];

var gifTastic = {
  addButton: function(gif) {
    var btn = $('<button>')
      .addClass('btn btn-display m-1')
      .attr('topic', gif)
      .text(gif);
    $('#gif-buttons').append(btn);
  },
  displayGifs: function(gif) {
    var queryURL = 'https://api.giphy.com/v1/gifs/search?api_key=wv4iP1f8xEfchiArmZMS4oeh0FtMM5uH&q=' + gif + '&limit=10&offset=0&rating=PG-13&lang=en';
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      $('.display-gifs').empty();
      var data = response.data;
      for (var i = 0; i < data.length; i++) {
        var imgTitle = data[i].title;
        var ImgRating = data[i].rating;
        var imgSrcStill = data[i].images.fixed_width_still.url;
        var imgSrcAnimated = data[i].images.fixed_width.url;
        var gifDiv = $('<div>').addClass('card');
        var imgdiv = $('<img>')
          .addClass('card-img-top')
          .attr({
            src: imgSrcStill,
            'data-still': imgSrcStill,
            'data-animate': imgSrcAnimated,
            'data-state': 'still'
          });
        var imgBody = $('<div>').addClass('card-body');
        var titleDiv = $('<p>')
          .addClass('card-title')
          .html('<strong>' + imgTitle + '</strong>');
        var ratingDiv = $('<p>').html('Rated: ' + '<strong>' + ImgRating + '</strong>');
        gifDiv.append(imgdiv, imgBody);
        imgBody.append(titleDiv, ratingDiv);
        $('.display-gifs').append(gifDiv);
      }
      $('.card-img-top').on('click', function() {
        var dataState = $(this).attr('data-state');
        if (dataState === 'still') {
          var dataAnimate = $(this).attr('data-animate');
          $(this).attr('src', dataAnimate);
          $(this).attr('data-state', 'animate');
        } else if (dataState === 'animate') {
          var dataStill = $(this).attr('data-still');
          $(this).attr('src', dataStill);
          $(this).attr('data-state', 'still');
        }
      });
    });
  }
};

$(window).on('load', function() {
  topics.forEach(topic => {
    gifTastic.addButton(topic);
  });
});

$(document).on('click', '#add-btn', function(event) {
  var newGif = $('#gif')
    .val()
    .toUpperCase();
  console.log(newGif);
  if (newGif && topics.includes(newGif) === false) {
    topics.push(newGif);
    event.preventDefault();
    gifTastic.addButton(newGif);
    $('#gif').val('');
  } else {
    event.preventDefault();
    $('#gif').val('');
  }
});

$(document).on('click', '.btn-display', function() {
  gifTastic.displayGifs($(this).attr('topic'));
});
