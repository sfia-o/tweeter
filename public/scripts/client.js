/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  //select elements
  const $tweetContainer = $('article');
  
  //create event handler for hover event
  $tweetContainer.hover(
    function() {
      $(this).css('box-shadow', '4px 4px 4px');
    },
    function() {
      $(this).css('box-shadow', 'none');
    }
  );

  const $tweetIcons = $('.icons i');

  $tweetIcons.hover(
    function() {
      $(this).css('color', '#D4A82A');
    },
    function() {
      $(this).css('color', '#4056A1');
    }
  );






});

