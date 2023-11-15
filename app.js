"use strict"
console.log("Let's get this party started!");


/** event listern on the submit button in the form to prevent default refreshes
 * and invoke reuestGiphy
 */
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

  const params = new URLSearchParams(input);
  console.log(params)

  let response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${params}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`,
    { method: "GET" });
  let gifData = await response.json();

  console.log(gifData.data[0].embed_url);

  let gif = gifData.data[0];

  let gifUrl = gif.embed_url;

  updateHTMLGif(gifUrl);
}

/** updateHTMLGif takes in url param
 * Actions: Appends gif to webpage.
 */

function updateHTMLGif(url) {
  let $img = $("<iframe></iframe>").attr({"src": `${url}`, "frameBorder": "0"});
  $(".gif-container").append($img);
}

/** event listern on delete button to remove all gifs in the DOM. */

$(".delete-gifs").on("click", function(evt) {
  $(".gif-container").empty();
})