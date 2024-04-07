let navEl = document.createElement('nav');
let mainEl = document.createElement('main');

// References: 
// https://getbootstrap.com/docs/5.0/components/navbar/
// https://developer.mozilla.org/en-US/docs/Web/API/Element/append

navEl = `<nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
        <img class="navbar-brand" src="./assets/in the market logo.png" alt="blog logo" height=150px>
        <form class="d-flex">
            <button class="btn btn-outline-secondary" type="button">Write</button>
            <button class="btn btn-outline-secondary" type="button">Read</button>
        </form>
    </div>
</nav>`



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