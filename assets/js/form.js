let mainEl = document.createElement('main');

let blogEntries = []

function addToSeries() {
    blogEntries.push(document.getElementById("new-post").value);
    console.log(`Updated array: ${blogEntries}`)
}

mainEl = 
``

// document.body.(mainEl);

document.getElementById(`submit-button`).addEventListener("click", addToSeries)