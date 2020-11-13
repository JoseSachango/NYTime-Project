{/*
Post template: 

<div class="card mx-5">
    <div class="card-header">
        <h3 data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, inventore pariatur. Veniam!
        </h3>
    </div>
    <div id="collapse1" class="collapse show">
        <div class="card-body">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque harum excepturi repellat porro incidunt ex nisi, vitae odit. Harum, dolor!
            <a href="https://www.google.com">see more...</a>
        </div>
    </div>
</div> 
*/}

//A div to hold all displayable data.
let $display = $('#display');
let postID = 0;


function createPostElement(headline, leadParagraph, url) {
    postID++;
    return $(`
    <div class="card mx-5 my-2">
        <div class="card-header">
            <h3 data-toggle="collapse" data-target="#collapse${postID}" aria-expanded="true" aria-controls="collapse${postID}">
                ${headline}
            </h3>
        </div>
        <div id="collapse${postID}" class="collapse">
            <div class="card-body">
                ${leadParagraph}
                <a href="${url}">see more...</a>
            </div>
        </div>
    </div> `);
}