//write your code here
let pictureBooks; 

fetch('https://openlibrary.org/subjects/picture_books_for_children.json?limit=100')
.then(response => response.json())
.then(data => {
    pictureBooks = data.works
    showBook(data.works[0])
    dropDownBooks(data.works)
    //console.log(listName)
    listName.addEventListener('change', () => {
        const foundBooks = pictureBooks.find(book => {
            //console.log(listName.value)
             return book.title === listName.value
        }) 
        //console.log(foundBooks)
        showBook(foundBooks)
    })
    
})

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookCover = document.getElementById('cover-image');
const bookSubject = document.getElementById('subject')
const description = document.getElementById('description');
const upvoteBtn = document.getElementById('upvote');
const reviewForm = document.getElementById('review-form');
const reviewContainer = document.querySelector('.review-container')
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
    reviewContainer.appendChild(newReview);
    reviewForm.reset();
    })

function dropDownBooks(data){
    for(let item of data){
        const option = document.createElement('option')
        option.textContent = item.title
        listName.appendChild(option)
    }
}