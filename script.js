const booksGrid = document.querySelector(".books-grid");
const bookTemplate = document.querySelector(".book");
const formModal = document.querySelector(".form-modal");
const bookForm = document.querySelector(".book-info");
const addBtn = document.querySelector(".addButton");
const closeBtn = document.querySelector(".close-button");
const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.hasRead = hasRead;
}

function addBookToLibrary() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("page").value;
    const hasRead = document.getElementById("status").value;
    console.log(`Has Read: ${hasRead}`);
    const userBook = new Book(title, author, page, hasRead);
    myLibrary.push(userBook);
}


function displayBooks() {
    booksGrid.innerHTML = '';

    myLibrary.forEach(b => {
        const book = bookTemplate.cloneNode(true);
        book.querySelector(".title").textContent = b.title;
        book.querySelector(".author").textContent = b.author;
        book.querySelector(".page").textContent = b.pages;
        book.querySelector(".status").src = b.hasRead ? 
                                    "./icons/finished.png": "./icons/reading.png";
        booksGrid.appendChild(book);
    });
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
    // formModal.close();
});




