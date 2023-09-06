const booksGrid = document.querySelector(".books-grid");
const bookTemplate = document.getElementById("book-temp");
const formModal = document.querySelector(".form-modal");
const bookForm = document.querySelector(".book-info");
const addBtn = document.querySelector(".addButton");
const closeBtn = document.querySelector(".close-button");
const myLibrary = [];

function Book(title, author, pages, hasRead, index) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("page").value;
    const hasRead = document.getElementById("status").checked ? true 
    : false;
    const userBook = new Book(title, author, page, hasRead);
    myLibrary.push(userBook);
}


function displayBooks() {
    booksGrid.innerHTML = '';
    // myLibrary.forEach(b => {
    //     const book = bookTemplate.content.cloneNode(true);
    //     book.querySelector(".title").textContent = b.title;
    //     book.querySelector(".author").textContent = b.author;
    //     book.querySelector(".page").textContent = b.pages;
    //     book.querySelector(".status").src = b.hasRead ? 
    //                                 "./icons/finished.png": "./icons/reading.png";
    //     book.querySelector(".delete-button")
    //     .addEventListener("click", deleteBook);
    //     booksGrid.appendChild(book);
    // });

    for (let i = 0; i < myLibrary.length; i++) {
        const b = myLibrary[i];
        const book = bookTemplate.content.cloneNode(true);
        book.querySelector(".title").textContent = b.title;
        book.querySelector(".author").textContent = b.author;
        book.querySelector(".page").textContent = b.pages;
        book.querySelector(".status").src = b.hasRead ? 
        "./icons/finished.png": "./icons/reading.png";
        book.querySelector(".delete-button")
        .addEventListener("click", deleteBook);
        booksGrid.appendChild(book);
        booksGrid.lastElementChild.dataset.index = i;
    }
}

addBtn.addEventListener("click", () => {
    formModal.showModal();
})

closeBtn.addEventListener("click", () => {
    formModal.close();
});

bookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    bookForm.reset();
    formModal.close();
});

function deleteBook(e) {
   const index = e.target.parentNode.parentNode.dataset.index;
   myLibrary.splice(index, 1);
   displayBooks();
}

const book1 = new Book("book1", "author1", 300, false);
myLibrary.push(book1);
displayBooks();



