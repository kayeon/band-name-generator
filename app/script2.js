'use strict';

$(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    var userNoun = $('#user-noun').val();
    var userVerb = $('#user-verb').val();

    if (userAdjective != '') {
      $.post('/adjective', {word: userAdjective}, function(response) {
        var confirm = response.message + " <em>" + response.confirm + "</em>";
        $('#adjective-res').html(confirm);
      })
    }

    if (userNoun != '') {
      $.post('/noun', {word: userNoun}, function(response) {
        var confirm = response.message + " <em>" + response.confirm + "</em>";
        $('#noun-res').html(confirm);
      })
    } else {
      $('#noun-res').html('');
    }

    if (userVerb != '') {
      $.post('/verb', {word: userVerb}, function(response) {
        var confirm = response.message + " <em>" + response.confirm + "</em>";
        $('#verb-res').html(confirm);
      })
    }

  })


  $("button").click(function() {
    $.get('/adjective', function(response) {
      var adjective = response.word;
      $("#adjective").text(adjective);
    });

    $.get('/verb', function(response) {
      var verb = response.word;
      $("#verb").text(verb);
    });

    $.get('/noun', function(response) {
      var noun = response.word;
      $("#noun").text(noun);
    });
  });
});
