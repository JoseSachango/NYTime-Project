


    //build the query url

    // var search = //get code from html with jQuery
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?Q=covid&api-key=GfMFFaeegwYa9U8WP04Q08tGCFW0G8PR";
    $.ajax({
        url: queryUrl,
        method: "GET"
    
    
    })
    .then(function(response) {
        console.log(response);



    })






