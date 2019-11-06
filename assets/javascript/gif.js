$(document).ready(function() {

    var reactionGifs = ["Thumbs Up", "Excited", "Tired", "Happy", "Confused", "Shocked", "Eyeroll", "OMG"];

    function displayButtons() {
         
        var buttons = $("#already-made-buttons")
        for(var i = 0; i < reactionGifs.length; i++) {
            buttons.append("<button id='gif-buttons'>" + reactionGifs[i] + "</button>");
        }
    }

    displayButtons();

    function displayGifs() {
    var reaction = $(this).attr("data-reaction");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + reactions + "&api_key=rHck95bsI4QzUCeJ5VjSKTXO4MsOFMOX"

    }
}) 