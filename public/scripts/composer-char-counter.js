$(document).ready(function() {
  //select elements
  const $textarea = $('#tweet-text');
  const $output = $('output');

  //declare variable to store text length count
  let textLength = 0;
  
  //function to count remaining characters
  const characterCount = function() {
    let charCount = 140 - textLength; //deducting the text length from the allowed character number
    $output.text(charCount); //update output element

    //condition to change text color to red when charCount is negative
    if (charCount < 0) {
      $output.css('color', '#c60b0bc9');
    } else {
      $output.css('color', ''); 
    }
  };

  //create event handler for input event on textarea
  $textarea.on('input', function() {
    textLength = $(this).val().length;
    characterCount(); //callback
  });

});

