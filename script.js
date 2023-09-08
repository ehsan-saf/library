const booksGrid = document.querySelector(".books-grid");
const bookTemplate = document.getElementById("book-temp");
const formModal = document.querySelector(".form-modal");
const bookForm = document.querySelector(".book-info");
const addBtn = document.querySelector(".addButton");
const closeBtn = document.querySelector(".close-button");
const myLibrary = [];

let selectedIndex = 0;

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
        book.querySelector(".edit-button").
        addEventListener("click", editForm);
        book.querySelector(".toggleStatus").addEventListener("click", toggleStatus);
        booksGrid.appendChild(book);
        booksGrid.lastElementChild.dataset.index = i;
    }
}

addBtn.addEventListener("click", () => {
    bookForm.onsubmit = addSubmit;
    formModal.showModal();
})

closeBtn.addEventListener("click", () => {
    formModal.close();
});


function deleteBook(e) {
   const index = getBookIndex(e);
   myLibrary.splice(index, 1);
   displayBooks();
}

function toggleStatus(e) {
    const index = getBookIndex(e);
    if(myLibrary[index].hasRead) {
        myLibrary[index].hasRead = false;
    }
    else {
        myLibrary[index].hasRead = true;
    }
    e.target.parentNode.querySelector(".status").src = 
    myLibrary[index].hasRead ? 
        "./icons/finished.png": "./icons/reading.png";
}

function addSubmit(e) {
    e.preventDefault();
    addBookToLibrary();
    displayBooks();
    bookForm.reset();
    formModal.close();
}

function changeSubmit(e) {
    e.preventDefault();
    saveChanges();
    displayBooks();
    bookForm.reset();
    formModal.close();
}

// Fill in the inputs with the selected book's information

function editForm(e) {
    bookForm.onsubmit = changeSubmit;
    const index = getBookIndex(e);
    const book = myLibrary[index];
    selectedIndex = index;
    formModal.showModal();
    document.getElementById("title").value = book.title;
    document.getElementById("author").value = book.author;
    document.getElementById("page").value = book.pages;
    document.getElementById("status").checked = true ? book.hasRead : false;
}

function saveChanges() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const page = document.getElementById("page").value;
    const hasRead = document.getElementById("status").checked ? true 
    : false;
    myLibrary[selectedIndex].title = title;
    myLibrary[selectedIndex].author = author;
    myLibrary[selectedIndex].pages = page;
    myLibrary[selectedIndex].hasRead = hasRead;
}

function getBookIndex(book) {
    return book.target.parentNode.parentNode.dataset.index;
}

const book1 = new Book("book1", "author1", 300, false);
myLibrary.push(book1);
displayBooks();



