$(document).ready(function() {

    // array of reactions
    var reactionGifs = ["Thumbs Up", "Excited", "Tired", "Happy", "Confused", "Shocked", "Eyeroll", "OMG", "Happy Dance", "Upset", "Surprised", "Amused", "Awkward"];

    // displayGifs function re-renders the HTML to display the correct gif content
    function displayGifs(reaction) {

        // query url link to giphy site for all the gifs data + my api key
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reaction + "&api_key=rHck95bsI4QzUCeJ5VjSKTXO4MsOFMOX&limit=10";
    
        // creating an AJAX call to add gifs to each reaction type 
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
    
            var reactions = response.data;
            console.log(response);
    
            for (var i = 0; i < reactions.length; i++) {
                // creating a div to hold the gifs
                var gifDiv = $("<div class='col gifs'>");

                // creating a paragraph tag to hold the rating of each gif
                var pRating = $("<p>").text("Rating: " + reactions[i].rating);

                // creating an element to hold each image
                var reactionImage = $("<img>");  
                
                // adding attributes to each image 
                reactionImage.attr("src-alt", reactions[i].images.fixed_height.url);
                // makes the gif a still image
                reactionImage.attr("src", reactions[i].images.fixed_height_still.url);
                // creating a class
                reactionImage.addClass("gif-img");
    
                //appending image to the page
                gifDiv.append(reactionImage);
                //appending rating to each image
                gifDiv.append(pRating);
    
                // prepend will put the new gif category above the previous category
                $("#gifs-displayed").prepend(gifDiv);
            }
            // on click function for starting and stopping gifs
            $(".gif-img").on("click", function() {
                console.log(this);
                var temp = $(this).attr("src-alt")
                $(this).attr("src-alt", $(this).attr("src"))
                $(this).attr("src", temp)           
            })
        })
    }

    // function to diplay and assign each button to their proper name from the array
    function displayButtons() {

        // deleting reactions before adding new ones so buttons don't repeat
        $("#already-made-buttons").empty();
         
        // loops through the array of reactions
        for(var i = 0; i < reactionGifs.length; i++) {

            // creating buttons (and style) for each reaction type in the array
            var buttonDiv = $("<button type='button' class='btn btn-warning'></button>");

            // adding a class for buttons
            buttonDiv.addClass("reaction-btn");

            buttonDiv.attr("data-name", reactionGifs[i]);

            // adding text to each button with the words in the array
            buttonDiv.text(reactionGifs[i]);

            // adding each button to the already made buttons div from the html
            $("#already-made-buttons").append(buttonDiv);
        }
    }

    // this function creates a new button when the "add my reaction" button is clicked
    $("#add-gif").on("click", function(event) {
        event.preventDefault();

        // creating a variable to grab whatever input the user puts into the textbox
        var reaction = $("#gif-input").val().trim();

        // adding users new reaction to the button list (the array)
        reactionGifs.push(reaction);
        // localStorage.setItem("gifs", JSON.stringify(reactionGifs))

        // calls displayButtons function to handle the processing of the reactions array
        displayButtons();
        displayGifs(reaction)
    });

    // a click event listener for gifs to display as well as be displayed when a user submits their new reaction
    $(document).on("click", ".reaction-btn", function(){
        var reaction = $(this).attr("data-name");
        displayGifs(reaction);
    });

    // displays the initial buttons from array
    displayButtons();

}); 