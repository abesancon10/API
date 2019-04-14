var topics = [
  // "Code Geass",
  // "No Game No Life",
  // "Gurren Lagann",
  // "School Rumble",
  // "My Hero Academia",
  // "Attack on Titan"
];

function renderButtons() {
  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");

    a.attr("data-anime", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);
  }
}
$("#add-anime").on("click", function(event) {
  event.preventDefault();
  var anime = $("#anime-input")
    .val()
    .trim();

  topics.push(anime);
  console.log(topics);
  renderButtons();
});

$("button").on("click", function() {
  var topic = $(this).attr("data-anime");
  console.log(this);
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topic +
    "&api_key=8jb7rE8JNIYpKtgXawpdsV8v4iqNrv84" +
    "&limit=10";
  function makeImage(obj) {
    //build the shell of the function see below
    return `
<div>
  <p>Rating: ${obj.rating}</p>
  <img src="${obj.images.fixed_height_still.url}" />
</div> 
`;
    //obj.images.fixed_height_still.url
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
