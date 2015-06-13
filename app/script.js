'use strict';

$(function() {
  $('#adjectiveForm').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function(response) {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $('#responseMessage').html(confirm);
    })
  })

  $('#nounForm').on('submit', function(event) {
    event.preventDefault();
    var userNoun = $('#user-noun').val();
    $.post('/noun', {word: userNoun}, function(response) {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $('#responseMessage').html(confirm);
    })
  })

  $('#verbForm').on('submit', function(event) {
    event.preventDefault();
    var userVerb = $('#user-verb').val();
    $.post('/verb', {word: userVerb}, function(response) {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $('#responseMessage').html(confirm);
    })
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
