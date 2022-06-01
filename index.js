//write your code here
const navElement = document.querySelector('.book-list');

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
// const bookCover = document.getElementById('cover-image');
// const yearReleased = document.getElementById('year-released')
// const isbn = document.getElementById('isbn');
// const description = document.getElementById('description');

const upvoteBtn = document.getElementById('upvote');

fetch('https://openlibrary.org/subjects/picture_books.json')
.then(response => response.json())
.then(data => {    
    console.log(data)
    for(let item of data.works){
        const list = document.createElement('li')
        list.textContent = item.title;
       
        navElement.appendChild(list);

        list.addEventListener('click', event => {
            showBook(item)
        })
    }
    showBook(data.works[0]);
    })

function showBook(bookInfo){
   // bookCover.src = bookInfo.cover;
    bookTitle.textContent = 'Title: ' + bookInfo.title;
    bookAuthor.textContent = 'Author: ' + bookInfo.authors[0].name;
   //yearReleased.textContent = bookInfo.publishDates;
  // isbn.textContent = bookInfo.isbn;
   // description.textContent = bookInfo.description;
}

//vote count incrementing by 1 ; need to get it to persist
upvoteBtn.addEventListener('click', event => {
    let voteCount = document.getElementById('vote-count')
    voteCount = voteCount.textContent ++;
})

//add review on the bottom of the page
const reviewForm = document.getElementById('review-form');
const reviewBtn = document.getElementById('review');

reviewForm.addEventListener('submit', event => {
    event.preventDefault();
    review.textContent = reviewBtn.value
    reviewForm.reset();
    }
)

let books =[];

const searchInput = document.querySelector('[data-search]')

searchInput.addEventListener('input', event =>{
    const value = event.target.value.toLowerCase;
    books.forEach(book => {
        const isVisible = book.title.includes(value) || book.authors.includes(value)
        books.element.classlist.toggle('hide', !isVisible);
    })

})