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
const reviewForm = document.getElementById('review-form');
const reviewBtn = document.getElementById('review');
const feedback = document.getElementById('leaving-feedback')

function displayBooks(data){
    for(let item of data){
        const text = document.createElement('h5')
        text.textContent = `${item.title}`;
        const navElement = document.querySelector('.book-list')
        navElement.appendChild(text);

        text.addEventListener('click', () => {
            showBook(item)
        })
    };
};

function showBook(bookInfo){
    bookTitle.textContent = `Title: ${bookInfo.title}`;
    bookAuthor.textContent = `Author: ${bookInfo.authors[0].name}`
    bookCover.src = `https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-L.jpg`
}

upvoteBtn.addEventListener('click', () => {
    let voteCount = document.getElementById('vote-count');
   voteCount=voteCount.textContent++;  
})

reviewForm.addEventListener('submit', event => {
    event.preventDefault();
    let newReview = document.createElement('h4')
    newReview.textContent = `"${reviewBtn.value}"` 
    document.querySelector('.review-container').appendChild(newReview)
     //feedback.textContent = `"${reviewBtn.value}"` 
     reviewForm.reset()
    })
