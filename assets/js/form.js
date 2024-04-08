let blogEntries = []

function addToSeries() {
    blogEntries.push(document.getElementById("new-post").value);
    console.log(`Updated array: ${blogEntries}`)
}

document.getElementById(`submit-button`).addEventListener("click", addToSeries)