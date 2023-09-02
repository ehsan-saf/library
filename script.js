const booksGrid = document.querySelector(".books-grid");
const book = document.querySelector(".blueprint").cloneNode(true);
book.classList.remove("blueprint");
book.classList.add("book");

const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.hasRead = hasRead;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

const book1 = new Book("book1", "author1", 25, true);
addBookToLibrary(book1);
displayBooks();

function displayBooks() {
    myLibrary.forEach(b => {
        book.querySelector(".title").textContent = b.title;
        book.querySelector(".author").textContent = b.author;
        book.querySelector(".page").textContent = b.pages;
        // book.querySelector(".status").src = "read.png";
        booksGrid.appendChild(book);
    });
}






