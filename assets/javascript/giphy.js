var topics = [
  // "Code Geass",
  // "No Game No Life",
  // "Gurren Lagann",
  // "School Rumble",
  // "My Hero Academia",
  // "Attack on Titan"
  // failed attempt to make buttons using the var; the var is used to make buttons
];

$("button").on("click", function() {
  var topic = $(this).attr("data-anime");
  console.log(this);
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?q=" +
    topic +
    "&api_key=8jb7rE8JNIYpKtgXawpdsV8v4iqNrv84" +
    "&limit=10";
  function makeImage(obj) {
    //Code I tried to use to play the gifs on click; would not load gifs after implemented
    //   var play = `<div>
    //   <p>Rating: ${obj.rating}</p>
    //   <img src="${obj.images.fixed_height.url}" />
    // </div>
    // `;
    //   var still = `<div>
    //   <p>Rating: ${obj.rating}</p>
    //   <img src="${obj.images.fixed_height_still.url}" />
    // </div>
    // `;
    //   event.preventDefault();
    //   //build the shell of the function see below
    //   return `
    //     <div>
    //       <p>Rating: ${obj.rating}</p>
    //       <img src="${obj.images.fixed_height_still.url}" />
    //     </div>
    //     `;

    //   function playGif() {
    //     if (still) {
    //       play;
    //     } else if (play) {
    //       still;
    //     }
    //   }
    return `
      <div>
        <p>Rating: ${obj.rating}</p>
        <img src="${obj.images.fixed_height.url}" />
      </div> 
      `;
      //use this to have a paused image <img src="${obj.images.fixed_height_still.url}" />
  }
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    $("#gifs-appear-here").prepend(response.data.map(makeImage));
  });
});

function renderButtons() {
  $("#buttons-view").empty();
  //NEED THIS TO PREVENT BUTTONS FROM REPEATING
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
  console.log(anime);
  renderButtons();
});
