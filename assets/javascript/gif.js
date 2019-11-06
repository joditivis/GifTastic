$(document).ready(function() {

    var reactionGifs = ["Thumbs Up", "Excited", "Tired", "Happy", "Confused", "Shocked", "Eyeroll", "OMG"];

//========================================

    //function to diplay and assign each button to their proper name from the array
    function displayButtons() {

        $("#already-made-buttons").empty();
         
        for(var i = 0; i < reactionGifs.length; i++) {

            var buttonDiv = $("<button>");

            buttonDiv.addClass("reaction-btn");

            buttonDiv.attr("data-name", reactionGifs[i]);

            buttonDiv.text(reactionGifs[i]);

            $("#already-made-buttons").append(buttonDiv);
        }
    }

    $("#already-made-buttons").on("click", function() {

    var reaction = $(this).attr("data-reaction");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=rHck95bsI4QzUCeJ5VjSKTXO4MsOFMOX";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        var reactions = response.data;

        for (var i = 0; i < reactions.length; i++) {

            var gifDiv = $("<div>");

            var reactionImage = $("<img>");

            reactionImage.attr("src", reactions[i].images.fixed_height.url);

            gifDiv.append(reactionImage);

            $("#gifs-displayed").prepend(gifDiv);
        }       
    })
})


    displayButtons();
}) 