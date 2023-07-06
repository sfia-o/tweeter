$(document).ready(function() {
  //select textarea element
  const $textarea = $('#tweet-text');

  function handleKeypress(event) {
     console.log('keypressed:', event);
  }

  //create an event handler
  $textarea.on('keypress', handleKeypress);
});

