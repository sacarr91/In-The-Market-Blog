const blogEntries = []

// purpose: gather value of user input, group together as object, add to array, store in local storage, final step: redirect to blog.html
function addToSeries(e) {
    e.preventDefault();

    const author = document.getElementById("author").value.trim();
    const entryTitle = document.getElementById("entry-title").value.trim();
    const postContent = document.getElementById("new-post-content").value.trim();
    
    let blogPost = {
        author: author,
        entryTitle: entryTitle,
        postContent: postContent
    }
    console.log(blogPost)

    // add to array
    blogEntries.push(blogPost);
    console.log(`Updated array: ${blogEntries}`)

    
    // store in local storage
    localStorage.setItem("entry", JSON.stringify(blogEntries));

    //redirect to blog.html
    location.href = './blog.html'
}

document.getElementById(`submit-button`).addEventListener("click", addToSeries)