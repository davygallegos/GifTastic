$(document).ready(function () {



    var themeSearch = ['Robot Jox', 'Killer Klowns From Outer Space', 'Thunderdome', 'Back to the Future', "Voltron", 'Synthwave'];
    //tutor notes: get into response and get URL of the GIF, take URL and append 
    // so it shows.  hint: convert URL into an image class.

    function showAllMyGifs() {
        var gifTopics = $(this).attr('data-name')
        console.log(this)
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "80s+" +
            gifTopics + "&api_key=2cZrVEsbGE904syJ2UF41Cf9KXwrL43W&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#gifView").empty()
            console.log(response)
            var responseArray = response.data
            responseArray.forEach(function (resultItem) {
                console.log(resultItem.images.fixed_height.url)

                var newDiv = $('<div>')
                var gifImg = $('<img>')
                gifImg.attr("src", resultItem.images.fixed_height.url)
                gifImg.addClass("gif")
                newDiv.append(gifImg)
                var ratingDiv = $('<div>')
                ratingDiv.text("Rating: " + resultItem.rating)

                newDiv.append(ratingDiv)
                $('#gifView').append(newDiv)


            })
        })


    }


    //renders buttons from the array
    function showButtons() {
        $('#buttonsDump').empty();
        themeSearch.forEach(function (themeSearchWord) {
            var addButtons = $("<button>")
            addButtons.addClass('eightyGif')
            addButtons.attr("data-name", themeSearchWord)
            addButtons.text(themeSearchWord)
            $('#buttonsDump').append(addButtons)
        })

    }
    //add user input into a 
    $('#addEighty').on('click', function (event) {
        event.preventDefault();
        var userInput = $('#search-input').val().trim()
        console.log(userInput)
        themeSearch.push(userInput)
        $("#search-input").val('')
        showButtons()


    })

    showButtons()
    $(document).on("click", ".eightyGif", showAllMyGifs)




    // $("#addEighty").on("click", function() {
    //     var eightySearch = $('#search-type').val().trim()
    //     event.preventDefault();
    //     var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + "80s+"+
    //     eightySearch +"&api_key=2cZrVEsbGE904syJ2UF41Cf9KXwrL43W";
    // console.log(eightySearch)
    // console.log(queryURL)
    // //calling ajax  for button click and new button clicks
    // ajaxCall()


    // function renderButtons() {
    // $('#buttons-view').empty();

    // for (var i=0; i< themeSearch.length;i++) {

    //     var a= $('<button>');
    //     a.addClass('movie');
    //     a.attr('data-name', themeSearch[i]);
    //     a.text(themeSearch[i]);
    //     $('#buttons-view').append(a);
    // }

    // }
    // renderButtons()


    // function ajaxCall(){
    // $.ajax({
    //     url: queryURL,
    //     method:'GET'
    // })
    // .then(function(response){
    //     console.log(response)
    // })
    // }
    // })
})