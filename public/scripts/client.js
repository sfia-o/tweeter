/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  
  /**
   *  Cross Scripting
   */
  const escape = function (str) {

    //Create new div
    let div = document.createElement("div");

    //Create a text node with the provided string
    div.appendChild(document.createTextNode(str));

    //Get the html content of the div, escaping special characters
    return div.innerHTML;
  };

  /**
   * Create new tweet article
  */
 
  const createTweetElement = function(tweetData) {

    console.log('timeago', timeago.format(tweetData.created_at) );
    
    const safeHTML = `<p class="message">${escape(tweetData.content.text)}</p>`;

    //html markup
    const $tweet = $(`
    <article class="tweet">
    <header>
    <div class="user-profile">
    <img src="${tweetData.user.avatars}" alt="profile picture of user"/>
    <h4 class="name">${tweetData.user.name}</h4>
    </div>
    <h4 class="username">${tweetData.user.handle}</h4>
    </header>
    
    <p class="message">${safeHTML}</p>
    
    <footer>
    <small id="timeago">${timeago.format(tweetData.created_at)}</small>
    
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
  

  /**
   * Render tweets
  */
     
  const renderTweets = function(tweets) {
    console.log('tweets', tweets);
    const reverseTweets = tweets.reverse();
    
    // Empty the tweet list container before rendering
    $("#tweet-list").empty();

    //loop through array of tweets
    for (const tweet of reverseTweets) {
      //pass each obj element through createTweetElement and assign it to variable
      const $tweetElement = createTweetElement(tweet);
      //append variable to #tweet-list html container
      $("#tweet-list").append($tweetElement);
      
        
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
        });
    }

  };
    
    
  /**
     * Tweet Post Request
     * */

  const $form = $('form');

  $form.on('submit', function(event) {
    // Prevent default action
    event.preventDefault();

    // Create a variable to store the query string
    const serializedData = $(this).serialize();
    const tweetText = $('#tweet-text').val().trim()

    // Hide the alert elements before checking conditions
    $('#alert-short').slideUp('slow');
    $('#alert-long').slideUp('slow');

    if (tweetText === "") {
      // Show the 'alert-short' element
      $('#alert-short').slideDown('slow');
    } else if (tweetText.length > 140) {
      // Show the 'alert-long' element
      $('#alert-long').slideDown('slow');
    } else {
      // Hide both alert elements
      $('#alert-short').slideUp('slow');
      $('#alert-long').slideUp('slow');

      // Post request
      $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/tweets',
        data: serializedData,
        success: function() {
          loadTweets();
        },
        error: (error) => {
          console.log("There was an error:", error);
        }
      });
      
      $('#tweet-text').val('');
    }
  });


  /**
     * Load tweets feed
    */

  const loadTweets = function() {

    $.ajax({
      type: 'GET',
      url: 'http://localhost:8080/tweets',
      success: (responseJSON) => {
        renderTweets(responseJSON);
      },
      error: (error) => {
        console.log("There was an error:", error);
      }
    });
  };

  loadTweets();
});
    
    
    
    
    
    