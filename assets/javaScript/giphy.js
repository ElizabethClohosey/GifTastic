// alert("testing");

// giphy key - S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK

var topics = ["Snowboarding", "Space", "Dogs", "Harry Potter", "X-ray", "Food", "1980's", "Groot", "New York", "Travel"];
    console.log(topics);

// function to create buttons for topics 
function renderButtons () {
    for (var i = 0; i < topics.length; i++) {
        // var elements = topics[i];
        // console.log("LOOP FOR TOPICS " + element);

        var topicButtons = $("<button>");
        topicButtons.addClass("topic-buttons");
        topicButtons.attr("data-buttons", topics[i]);
        topicButtons.text(topics[i]);
        // $(topicButtons).attr("value", topics[i]);
        $("#buttons-for-topics").append(topicButtons);
    }
}

renderButtons();

// function to add user topic of choice from input to DOM and topics array 
$("#user-addition").on("click", function(event) {
    event.preventDefault();
    var newTopic = $("#user-topic").val().trim();
    topics.push(newTopic);
    console.log("Input Topic " + newTopic);
    // var inputTopic = topics[topics.length - 1];
    $("#buttons-for-topics").empty();
    renderButtons();
    $("#user-topic").val('');
    // movieButton.html(inputTopic);
    // $("#buttons-for-topics").append(inputTopic);
});

// function to add gifs when each topic button is clicked 
$("#buttons-for-topics").on("click", function(){ 
    // alert("TESTING");

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
        for (var i = 0; i < results.length; i++) {
            // const element = topics[i];

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(gifImage);
                $("#show-gifs").prepend(gifDiv);
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