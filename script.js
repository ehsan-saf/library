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

const book1 = new Book("book1", "ehsan", 25, true);
const book2 = new Book("book2", "ali", 110, false);

addBookToLibrary(book1);
addBookToLibrary(book2);

console.table(myLibrary);