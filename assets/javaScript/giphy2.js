// alert("testing");


var topics = ["Snowboarding", "Space", "Dogs", "Harry Potter", "X-ray", "Food", "1980's", "Groot", "New York", "Travel", "South Park", "Archer"];
    console.log(topics);

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

    $("#buttons-for-topics").on("click", function(){ 
        // alert("TESTING");
    
    event.preventDefault();
    var topic = "snowboarding";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);
        var results = response.data;
        for (var i = 0; i < results.length; i++) {
            // const element = topics[i];

            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                var topicButtons = $("<button>");
                var gifDiv = $("<div>");
                var rating = results[i].rating;
                var p = $("<p>").text("Rating: " + rating);
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.append(p);
                gifDiv.append(gifImage);
                $("#show-gifs").prepend(gifDiv);
                $(topicButtons).attr("value", topics[i]);
                
            }
        }    
    });

    var topic = "space";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "dogs";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "harry potter";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "x-ray";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "food";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "1980's";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "groot";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "new york";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "travel";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "South Park";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
    });

    var topic = "Archer";
    queryURL = "https://api.giphy.com/v1/gifs/search?q="  + topic + "&api_key=S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        console.log(response);

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
        });
    });

// questions for TA's 
// why is it giving me 10 for some and 9 for others?
// Do I have to make an ajax call for each of these because they are totally different topics? if that's the case then
// Can I just keep it this way or is that not the assigment?
// why aren't my gifs matching my buttons!!!!!?