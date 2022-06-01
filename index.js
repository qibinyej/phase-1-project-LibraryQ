//write your code here
fetch('https://openlibrary.org/subjects/picture_books.json')
.then(response => response.json())
.then(data => {
    //console.log(data)
    for(let item of data){
        const spanElement = document.createElement('span')
        spanElement.textContent = item.title;

        const navElement = document.querySelector('.book-list');
        //console.log(navElement)
        navElement.appendChild(spanElement);

        spanElement.addEventListener('click', event => {
            showBook(item)
        })

    showBook(data[0]);
    };
});

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookCover = document.getElementById('cover-image');
const yearReleased = document.getElementById('year-released')
const isbn = document.getElementById('isbn');
const description = document.getElementById('description');

//need to look at json keys
function showBook(bookInfo){
   // bookCover.src = bookInfo.cover;
    bookTitle.textContent = bookInfo.works[0]['title'];
    bookAuthor.textContent = bookInfo.authors[0]['name'];
   //yearReleased.textContent = bookInfo.publishDates;
  // isbn.textContent = bookInfo.isbn;
   // description.textContent = bookInfo.description;
}

//vote count incrementing by 1 ; need to get it to persist
const upvoteBtn = document.getElementById('upvote');
const voteCount = document.getElementById('vote-count');

upvoteBtn.addEventListener('click', event => {
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
