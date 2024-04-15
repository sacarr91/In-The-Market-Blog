//pull data from local storage
//display in cards
//  with author name, title, post

const blogEntries = JSON.parse(localStorage.getItem("entry")) || [] 

// test --remove after
for (let i = 0; i < blogEntries.length; i++) {
    const blog = blogEntries[i];
    console.log(blog);}
// remove above

//create postcard function

//iterate through array, call function to display/append entry card
// function renderBlogPage() {
// //declare variables from html

// // let blogPost = {
// //     author: author,
// //     entryTitle: entryTitle,
// //     postContent: postContent
// }

// for (let i = 0; i < blogEntries.length; i++) {
//     const blog = blogEntries[i];
//     console.log(blog);
//     // newPostCard();
// }
// }

// const cardContainer = document.getElementById('card-container');

// function newPostCard(entryTitle, author, postContent) {
//     const postCard = document.createElement('div');
//     postCard.setAttribute('class', 'display-card');

//     const cardTitle = document.createElement('h2');
//     cardTitle.textContent = title;

//     const cardAuthor = document.createElement('h3');
//     cardAuthor.textContent = author;

//     const cardContent = document.createElement('p');
//     cardContent.textContent = content;

//     postCard.appendChild(cardTitle);
//     postCard.appendChild(cardContent);

//     return postCard;
// }

// // Example usage
// // const card1 = createCard('Dynamic Cards 101', 'Learn how to spice up your web page with dynamic card rendering!');
// // const card2 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');

// cardContainer.appendChild(card1);
// cardContainer.appendChild(card2);