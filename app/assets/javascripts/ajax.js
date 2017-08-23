
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function(event) {

  var newTweet = document.querySelector('#new_tweet');

  newTweet.addEventListener('submit', function(eventObject) {
    eventObject.preventDefault();

    var tweetElement = document.querySelector('.tweet');
    var tweetList = document.querySelector('.tweets');
    var tweetInput = tweetElement.value;

  $.ajax( {
    url: this.getAttribute('action'),
    method: this.getAttribute('method'),
    data: $(this).serialize(),
    dataType: 'json'
  }).done(function (data) {
    console.log(data);

    var element = document.createElement('li');
    var tweet = document.createElement('p');
    tweet.innerText = data.message;
    element.append(tweet);
    var newTime = document.createElement('time');
    newTime.innerText = new Date();
    element.append(newTime);
    element.classList = 'tweet';
    tweetList.prepend( element );

    newTweet.reset();

    var button = document.querySelector('#create-tweet');
    button.removeAttribute('disabled');
    button.removeAttribute('data-disable-with');
  });

  });
})
