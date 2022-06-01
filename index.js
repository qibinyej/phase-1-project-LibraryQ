//write your code here
fetch('https://openlibrary.org/subjects/picture_books.json')
.then(response => response.json())
.then(data => {
    displayBooks(data.works)
    showBook(data.works[0])
})

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookCover = document.getElementById('cover-image');
const yearReleased = document.getElementById('year-released')
const isbn = document.getElementById('isbn');
const description = document.getElementById('description');
const upvoteBtn = document.getElementById('upvote');
const voteCount = document.getElementById('vote-count');

function displayBooks(data){
    for(let item of data){
        const header4 = document.createElement('h4')
        header4.textContent = `${item.title}`;
        const navElement = document.querySelector('.book-list')
        navElement.appendChild(header4);

        header4.addEventListener('click', () => {
            showBook(item)
        })
    };
};

//need to look at json keys
function showBook(bookInfo){
    bookTitle.textContent = bookInfo.title;
    bookAuthor.textContent = bookInfo.authors[0].name
    bookCover.src = `https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-L.jpg`
}

upvoteBtn.addEventListener('click', () => {
    let total = voteCount.textContent++;
    voteCount = total;
})

//add review on the bottom of the page
const reviewForm = document.getElementById('review-form');
const reviewBtn = document.getElementById('review');
reviewForm.addEventListener('submit', event => {
    event.preventDefault();
    reviewBtn.textContent = event.target['review'].value;

    reviewForm.reset();
    }
)
