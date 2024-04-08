let mainEl = document.createElement('main');

let blogEntries = []

function addToSeries() {
    blogEntries.push(document.getElementById("new-post").value);
    console.log(`Updated array: ${blogEntries}`)
}

mainEl = 
`<main>
    <h1>Welcome to The Market!</h1>
        <p>Our blog is a communal space to share thoughts, musings, learnings, and wonderings as we navigate careers in content marketing.</p>
        <p>Add a post below or click over to read what others have written using the navigation links in the top right corner of the page. Remember we're all works in progress and may be at different points in our learning journey, so be kind, be a colleague, and behave!</p>
        <p id="disclaimer"><b>Disclaimer:</b> As this is an open-post page, take anything you read with a grain of salt--just as you would in a group conversation at a networking event. Let your attitude as a reader be "Trust, but verify." <b id="title">In the Market Blog</b> does not claim blanket veracity of posted content. Site users are responsible for ensuring information shared on and gleaned from this site is accurate at the time of use.</p>
        <p style="text-align:center;">❤︎</p>
    <h2>New Blog Post</h2>
    <form id="new-post">
        <div class="form-group">
            <label for="author">Author</label>
            <input type="text" id="author" class="form-control form-control-sm"/>
        </div>
        <div class="form-group">
            <label for="entry-title">Title of Entry</label>
            <input type="text" id="entry-title" class="form-control form-control-lg">
        </div>
        <div class="form-group">
            <label for="new-post-content">Write your post</label>
            <textarea class="form-control" id="new-post-content" rows="9"></textarea>
        </div>
        <button type="submit" class="btn btn-primary" id="submit-button">Post</button>
    </form>
        
    
</main>`


document.body.innerHTML = navEl+mainEl;

document.getElementById(`submit-button`).addEventListener("click", addToSeries)