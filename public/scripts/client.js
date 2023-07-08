/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  /**
   * Create new tweet article
  */
 
 //tweet object temporarily hard coded
 const tweetData = {
   "user": {
     "name": "Newton",
     "avatars": "./images/man2.png",
     "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1688601411371
  };
  
  const createTweetElement = function(tweetData) {
    
    const $tweet = $(`
    <article class="tweet">
    <header>
    <div class="user-profile">
    <img src="${tweetData.user.avatars}" alt="profile picture of user"/>
    <h4 class="name">${tweetData.user.name}</h4>
    </div>
    <h4 class="username">${tweetData.user.handle}</h4>
    </header>
    
    <p class="message">${tweetData.content.text}</p>
    
    <footer>
    <small>${tweetData.created_at}</small>
    
    <div class="icons">
    <i class="fa-solid fa-flag" style="color: #4056A1"></i>
    <i class="fa-solid fa-retweet" style="color: #4056A1"></i>
    <i class="fa-solid fa-heart" style="color: #4056A1"></i>
    </div>
    </footer>
    </article>
    `);
    
    return $tweet;
  };
  
  const $tweetElement = createTweetElement(tweetData);
  $('#tweet-list').append($tweetElement);
  
  /**
   * Hover over tweet article and icons effect
   */
  
  //select elements
  const $tweetContainer = $('article');
  const $tweetIcons = $('.icons i');
  
  //hover event handler for tweet article container
  $tweetContainer.hover(
    function() {
      $(this).css('box-shadow', '4px 4px 4px');
    },
    function() {
      $(this).css('box-shadow', 'none');
    }
  );
  
  //hover event handler for icons
  $tweetIcons.hover(
    function() {
      $(this).css('color', '#D4A82A');
    },
    function() {
      $(this).css('color', '#4056A1');
    }
  );
  
});




