console.log("Let's get this party started!");

// $("form").on("submit", requestGIPHY);
$(".submit").on("click", function (evt){
  requestGiphy();
  evt.preventDefault();
});

async function requestGiphy(){
  const input = $("#search").val()
  console.log(input);

  const params = new URLSearchParams(input);
  console.log(params)
  let response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${params}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`,
    { method: "GET" });
  let text = await response.text();

  console.log(text)

  //use fetch to make a request to GIPHY for info based on term
  //receive response, console.log response data
  // evt.preventDefault();

}