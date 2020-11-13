


    //build the query url

     var search = $("#exampleInputEmail1"); //get code from html with jQuery
    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?Q=" + search + "&api-key=GfMFFaeegwYa9U8WP04Q08tGCFW0G8PR";
    $.ajax({
        url: queryUrl,
        method: "GET"
    
    
    })
    .then(function(response) {
        //console.log(response);
        var headline = response.headline.main;
        var article = response.lead_paragraph


    })






