'use strict';

$(function() {
  $('#adjectiveForm').on('submit', function(event) {
    event.preventDefault();
    var userAdjective = $('#user-adjective').val();
    $.post('/adjective', {word: userAdjective}, function(response) {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $('#responseMessage').html(confirm);
    });
  });

  $('#nounForm').on('submit', function(event) {
    event.preventDefault();
    var userNoun = $('#user-noun').val();
    $.post('/noun', {word: userNoun}, function(response) {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $('#responseMessage').html(confirm);
    });
  });

  $('#verbForm').on('submit', function(event) {
    event.preventDefault();
    var userVerb = $('#user-verb').val();
    $.post('/verb', {word: userVerb}, function(response) {
      var confirm = response.message + " <em>" + response.confirm + "</em>";
      $('#responseMessage').html(confirm);
    });
  });


  $("button").click(function() {
    $("#adjective").removeClass('red');

    $.get('/adjective', function(response) {
      if (response.favorited) {
        $("#adjective").addClass('red');
      }
      var adjective = response.word;
      $("#adjective").text(adjective);

    });
  });

  $("button").click(function() {
    $("#verb").removeClass('red');
  
    $.get('/verb', function(response) {
      if (response.favorited) {
        $("#verb").addClass('red');
      }
      var verb = response.word;
      $("#verb").text(verb);
    });
  });


  $("button").click(function() {
    $("#noun").removeClass('red');

    $.get('/noun', function(response) {
      if (response.favorited) {
        $("#noun").addClass('red');
      }
      var noun = response.word;
      $("#noun").text(noun);
    });
  });

  $("#adjective").click(function() {
    $.post('/favorite', {type: 'adjective', word: $('#adjective').text()}, function(response) {
      if (response.favorited) {
        $("#adjective").addClass('red');
      } else {
        $("#adjective").removeClass('red');
      }
    });    
  });

  $("#verb").click(function() {
    $.post('/favorite', {type: 'verb', word: $('#verb').text()}, function(response) {
      if (response.favorited) {
        $("#verb").addClass('red');
      } else {
        $("#verb").removeClass('red');
      }
    });    
  });

  $("#noun").click(function() {
    $.post('/favorite', {type: 'noun', word: $('#noun').text()}, function(response) {
      if (response.favorited) {
        $("#noun").addClass('red');
      } else {
        $("#noun").removeClass('red');
      }
    });    
  });


});
