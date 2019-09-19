// alert("testing");

// giphy key - S0zplPv4eNUbSVpvs05l7cC3Fuwo2OPK

var topics = ["Snowboarding", "Space", "Dogs", "Harry Potter", "X-ray", "Food", "1980's", "Groot", "New York"];
    // console.log(topics);

for (var i = 0; i < topics.length; i++) {
    var elements = topics[i];
    // console.log("LOOP FOR TOPICS " + element);

    var topicButtons = $("<button>");
    topicButtons.addClass("topic-buttons");
    topicButtons.attr("data-buttons", elements);
    topicButtons.text(elements);

    console.log(topicButtons);
    $("#buttons-for-topics").append(topicButtons);
}



















// *********************IMPORTANT**************************

// * Make sure you switch the protocol in the query URL from **`http to https`**, or the app may not work properly when deployed to Github Pages.