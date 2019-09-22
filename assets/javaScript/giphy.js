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
        // topicButtons.attr("data-buttons", topics[i]);
        topicButtons.text(topics[i]);
        $(topicButtons).attr("value", topics[i]);
        $("#buttons-for-topics").append(topicButtons);
        // $("#data-buttons").attr("value", topics[i]);
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
    // newTopit.html(inputTopic);
    // $("#buttons-for-topics").append(inputTopic);
});

// function to add gifs when each topic button is clicked 
$(".topic-buttons").on("click", function(){ 
    // alert("TESTING");

    // work in progress comeback tomorrow 
    event.preventDefault();
    
    var topic = $(this).val();

    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

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
                gifImage.attr("src", results[i].images.fixed_height_still.url);
                gifImage.attr("data-state", "still");
                gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                gifImage.attr("data-animate", results[i].images.fixed_height.url);
                gifImage.addClass("topicGifs");
                gifDiv.append(p);
                gifDiv.append(gifImage);
                $("#show-gifs").prepend(gifDiv);
            }
        }
    });

    $(document).on("click", ".topicGifs", function(){
        var status = $(this).attr("data-state");
            if (status === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
    });

});
