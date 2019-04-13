$("button").on("click", function() {
  var animal = $(this).attr("data-animal");
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    animal +
    "&api_key=8jb7rE8JNIYpKtgXawpdsV8v4iqNrv84";
  function makeImage(obj) {
    //build the shell of the function see below
    return `
  <div>
    <p>Rating: ${obj.rating}</p>
    <img src="${obj.images.fixed_height.url}" />
  </div>
  `;
    //function makeImage(obj){
    // return `
    // <div>
    // <p>Rating: R</p>
    //  <img src="" />
    // </div>
    // `
  }
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
    // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.

    console.log(response);
    $("#gifs-appear-here").prepend(response.data.map(makeImage));
  });
});
