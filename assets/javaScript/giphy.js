// alert("testing");

// giphy key - S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK

var topics = ["Snowboarding", "Space", "Dogs", "Harry Potter", "X-ray", "Food", "1980's", "Groot", "New York", "Travel"];
    // console.log(topics);

for (var i = 0; i < topics.length; i++) {
    var elements = topics[i];
    // console.log("LOOP FOR TOPICS " + element);

    var topicButtons = $("<button>");
    topicButtons.addClass("topic-buttons");
    topicButtons.attr("data-buttons", elements);
    topicButtons.text(elements);
    // $(topicButtons).attr("value", topics[i]);

    console.log(topicButtons);
    $("#buttons-for-topics").append(topicButtons);
}
$("#buttons-for-topics").on("click", function(){ 
    alert("TESTING");

    // work in progress comeback tomorrow 
    event.preventDefault();
    
    var topic = $(this).attr("data-buttons");
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        // console.log(response);
        var results = response.data;
        for (var i = 0; i < topics.length; i++) {
            // const element = topics[i];

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(gifImage);
                $("#show-gifs");
            }
            
        }
        // put code to connect gifs to buttons here 
    });
});
// var topic = "space";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "dogs";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "harry potter";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "x-ray";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "food";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "1980's";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "groot";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });

// var topic = "new york";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);

//     // put code to connect gifs to buttons here 
// });

// var topic = "travel";
// queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK";

// $.ajax({
//     url: queryURL,
//     method: "GET",
// }).then(function(response){
//     console.log(response);
//     // put code to connect gifs to buttons here 
// });






                    // pseudocode
// add API to code using Ajax syntax
// make onclick event for topic buttons to call related gifs
//     - add ratings
// make form to add additional favorite topics (with submit button)
// make gifs pausable




















// *********************IMPORTANT**************************

// * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.