//pull data from local storage
//display in cards
//  with author name, title, post

const blogEntries = JSON.parse(localStorage.getItem("entry")) || [] 

//create postcard function

//iterate through array, call function to display/append entry card
function renderBlogPage() {
//declare variables from html

for (let i = 0; i < blogEntries.length; i++) {
    const blog = blogEntries[i];
    console.log(blog);
    //call postcard function
}
}

const cardContainer = document.getElementById('card-container');

function newPostCard(title, text) {
    const postCard = document.createElement('div');
    postCardard.setAttribute('class', 'display-card');

    const cardTitle = document.createElement('h2');
    cardTitle.textContent = title;

    const cardContent = document.createElement('p');
    cardContent.textContent = content;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    return card;
}

// Example usage
const card1 = createCard('Dynamic Cards 101', 'Learn how to spice up your web page with dynamic card rendering!');
const card2 = createCard('The Power of Flexibility', 'Discover the endless possibilities of dynamic content.');

cardContainer.appendChild(card1);
cardContainer.appendChild(card2);