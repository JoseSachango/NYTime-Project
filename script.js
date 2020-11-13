


var searchButton = $("#searchButton")


function userInput(event){

    event.preventDefault()

    

    var searchTerm = $("#exampleInputEmail1").val()
    var numberOfSearchTerms = $("#formControlSelect").val()
    var startYear = $("#startYear").val()
    var endYear = $("#endYear").val()


    console.log(searchTerm)
    console.log(numberOfSearchTerms)


}


searchButton.on("click",userInput)



