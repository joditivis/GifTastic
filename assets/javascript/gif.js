// $(document).ready(function() {

    var reactionGifs = ["Thumbs Up", "Excited", "Tired", "Happy", "Confused", "Shocked", "Eyeroll", "OMG"];

//========================================

    //Function: displays gifs when buttons are clicked because of url link
    function displayGifs() {

        var reaction = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=rHck95bsI4QzUCeJ5VjSKTXO4MsOFMOX&limit=10";
    
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
    
            var reactions = response.data;
    
            for (var i = 0; i < reactions.length; i++) {
    
                var gifDiv = $("<div class='gifs'>");
    
                var reactionImage = $("<img>");
    
                reactionImage.attr("src", reactions[i].images.fixed_height.url);
    
                gifDiv.append(reactionImage);
    
                $("#gifs-displayed").prepend(gifDiv);
            }       
        })
    }

    //function to diplay and assign each button to their proper name from the array
    function displayButtons() {

        $("#already-made-buttons").empty();
         
        for(var i = 0; i < reactionGifs.length; i++) {

            var buttonDiv = $("<button type='button' class='btn btn-light'></button>");

            buttonDiv.addClass("reaction-btn");

            buttonDiv.attr("data-name", reactionGifs[i]);

            buttonDiv.text(reactionGifs[i]);

            $("#already-made-buttons").append(buttonDiv);
        }
    }

    $("#add-gif").on("click", function(event) {
        event.preventDefault();

        var reaction = $("#gif-input").val().trim();

        reactionGifs.push(reaction);

        displayButtons();
    });

    $(document).on("click", ".reaction-btn", displayGifs);

    displayButtons();


// }) 