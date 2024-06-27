const myLibrary = [
    {
        title: "The Philosopher's Stone",
        author: "JK Rowling",
        pages: "400",
        read: "No not yet"
    }
];

// Constructor function for Book
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Get the container where you want to display the books
const container = document.getElementById("library");

const addBookToLibrary = () => {
    // Clear existing content
    container.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.className = "book";

        const titleElement = document.createElement("h2");
        titleElement.textContent = book.title;

        const authorElement = document.createElement("p");
        authorElement.textContent = `Author: ${book.author}`;

        const pagesElement = document.createElement("p");
        pagesElement.textContent = `Pages: ${book.pages}`;

        const readElement = document.createElement("p");
        readElement.textContent = `Read: ${book.read}`;

        const haveReadElement = document.createElement("img");
        haveReadElement.src = "./eye.svg";
        haveReadElement.id = "haveRead";
        haveReadElement.style.width = "20px";
        haveReadElement.setAttribute("data-index", index);

        const deleteElement = document.createElement("img");
        deleteElement.src = "./bin.svg";
        deleteElement.id = "delete";
        deleteElement.style.width = "20px";
        deleteElement.setAttribute("data-index", index);

        deleteElement.addEventListener("click", (e) => {
            const indexToDelete = parseInt(e.target.getAttribute("data-index"));
            myLibrary.splice(indexToDelete, 1);
            addBookToLibrary();
        });

        // Handle card read status
        haveReadElement.addEventListener("click", (e) => {
            const indexToUpdate = parseInt(e.target.getAttribute("data-index"));
            const bookToUpdate = myLibrary[indexToUpdate];
            bookToUpdate.read = bookToUpdate.read === "Yes" ? "No, not yet" : "Yes";
            addBookToLibrary();
        });

        bookCard.appendChild(titleElement);
        bookCard.appendChild(authorElement);
        bookCard.appendChild(pagesElement);
        bookCard.appendChild(readElement);
        bookCard.appendChild(haveReadElement);
        bookCard.appendChild(deleteElement);
        container.appendChild(bookCard);
    });
};

addBookToLibrary();


document.getElementById("form-add").addEventListener("submit", (e) => {
    e.preventDefault();


    const title = e.target.title.value;
    const author = e.target.author.value;
    const pages = e.target.pages.value;
    const read = e.target.read.value;

    const newBook = new Book(title, author, pages, read);

    myLibrary.push(newBook);

    addBookToLibrary();

    e.target.reset();
});
