


var searchButton = $("#searchButton")
var clearButton = $("#clearButton")


function userInput(event){

    event.preventDefault()

    

    var searchTerm = $("#exampleInputEmail1").val()
    var numberOfSearchTerms = $("#formControlSelect").val()
    var startYear = $("#startYear").val()
    var endYear = $("#endYear").val()

    console.log("the number of search term values is: "+numberOfSearchTerms)

    console.log("search terms: "+searchTerm)
    console.log("start year: "+startYear)
    console.log("end year: "+endYear)
   


}

function clearInput(event){

    event.preventDefault()

    $("#exampleInputEmail1").val("")
    var numberOfSearchTerms = $("#formControlSelect").val()
    var startYear = $("#startYear").val("")
    var endYear = $("#endYear").val("")


}


searchButton.on("click",userInput)
clearButton.on("click",clearInput)



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
        var leadParagraph = response.lead_paragraph;
        var url = response.web_url;


    })






