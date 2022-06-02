//write your code here
fetch('https://openlibrary.org/subjects/picture_books.json?limit=100')
.then(response => response.json())
.then(data => {
    showBook(data.works[0])
    dropDownBooks(data.works)
    console.log(listName)
    listName.addEventListener('change', () => {
        showBook(listName.value)})
})

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookCover = document.getElementById('cover-image');
const bookSubject = document.getElementById('subject')
const description = document.getElementById('description');
const upvoteBtn = document.getElementById('upvote');
const reviewForm = document.getElementById('review-form');
const reviewBtn = document.getElementById('review');
const listName = document.querySelector('#list-names')

function showBook(bookInfo){
    bookTitle.textContent = `Title: ${bookInfo.title}`;
    bookAuthor.textContent = `Author: ${bookInfo.authors[0].name}`
    bookCover.src = `https://covers.openlibrary.org/b/id/${bookInfo.cover_id}-L.jpg`
    bookSubject.textContent = `Subjects: ${bookInfo.subject}`
}

upvoteBtn.addEventListener('click', () => {
    let voteCount = document.getElementById('vote-count');
   voteCount=voteCount.textContent++;  
})

reviewForm.addEventListener('submit', event => {
    event.preventDefault();

    let newReview = document.createElement('h3')
    newReview.textContent = `“${reviewBtn.value}“`
    document.querySelector('.review-container').appendChild(newReview);
    reviewForm.reset();
    })

function dropDownBooks(data){
    for(let item of data){
        const option = document.createElement('option')
        option.textContent = item.title
        listName.appendChild(option)
    }
}