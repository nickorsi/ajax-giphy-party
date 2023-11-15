"use strict";

console.log("Let's get this party started!");


/** event listern on the submit button in the form to prevent default refreshes
 * and invoke requestGiphy
 */
//TODO: Refactor to do listener on form submission
$(".submit").on("click", function (evt){
  evt.preventDefault();
  requestGiphy();
});

/** requestGiphy takes no input
 * Actions: Grabs user search input, creates new URLSearchParams, and makes a
 * fetch request passing in the giphy url key with the user search params.
 * Turns response into a JS object and grabs the embed url.
 * Then invokes updateHTMLGif passing in the embed url.
 */
async function requestGiphy(){
  const input = $("#search").val();
  console.log(input);

  //TODO: Refactor to have the params also take in the api key and make it an object

  const params = new URLSearchParams(input);
  console.log(params)

  let response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${params}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`,
    { method: "GET" });
  let gifData = await response.json();

  //TODO: Can refactor to grab a random gif

  console.log(gifData);

  let gif = gifData.data[0];

  let gifUrl = gif.embed_url;

  updateHTMLGif(gifUrl);
}

/** updateHTMLGif takes in url param
 * Actions: Appends gif to webpage.
 */

function updateHTMLGif(url) {
  //TODO: Refactor to grab img url rather than the embed url
  // let $img = $("<iframe></iframe>").attr({"src": `${url}`, "frameBorder": "0"});
  let $img = $("<img>").attr("src", `${url}`);
  $(".gif-container").append($img);
}

/** event listern on delete button to remove all gifs in the DOM. */

$(".delete-gifs").on("click", function(evt) {
  $(".gif-container").empty();
})