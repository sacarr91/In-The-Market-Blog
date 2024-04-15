// written with guidance from Sandy & Medium article
// https://shadowcoder.medium.com/dynamic-card-rendering-in-javascript-unleashing-the-power-of-flexibility-72e55130b091

const cardContainer = document.getElementById('card-container');
const allEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];

function newPostCard(x, y, z) {
    const fancyCard = document.createElement('div');
    fancyCard.setAttribute('class', 'card')
    const fancyBox = document.createElement('div');
    fancyBox.setAttribute('class', 'light-box')
    const postCard = document.createElement('div');
    postCard.setAttribute('class', 'display-card');

    const postTitle = document.createElement('h2');
    postTitle.textContent = x;

    const postAuthor = document.createElement('h3');
    postAuthor.textContent = `by ${y}`;

    const postContent = document.createElement('p');
    postContent.textContent = z;

    postCard.appendChild(postTitle);
    postCard.appendChild(postAuthor);
    postCard.appendChild(postContent);

    fancyBox.appendChild(postCard);
    fancyCard.appendChild(fancyBox);

    cardContainer.appendChild(fancyCard);
}

for (let i = 0; i < allEntries.length; i++) {
    const blogAuthor = allEntries[i].author;
    const blogTitle = allEntries[i].entryTitle;
    const blogContent = allEntries[i].postContent;
    newPostCard(blogTitle, blogAuthor, blogContent);
}