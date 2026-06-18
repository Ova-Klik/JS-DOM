// let pageBanner = document.getElementById("page-banner");
// console.log(pageBanner)

// let span = document.getElementsByClassName("name");
// console.log(span)

// console.log(Array.isArray(Array.from(span)))

// let lis=document.getElementsByTagName("li")
// console.log(lis)


// let wrapper= document.querySelector("#wrapper")
// console.log(wrapper)

// let lis1= document.querySelectorAll(".delete")
// console.log(lis1)

const ul = document.querySelector("#book-list ul");

let books =
    JSON.parse(localStorage.getItem("books")) ||
    [
        "Name of the Wind",
        "The Wise Man's Fear",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ];

    function saveBooks() {
    localStorage.setItem(
        "books",
        JSON.stringify(books)
    );
}

// Accept an optional list; fall back to full books array
function renderBooks(list = books) {
  ul.innerHTML = "";
  list.forEach(book => {
    let li = document.createElement("li");
    li.innerHTML = `
      <span class="name">${book}</span>
      <span class="delete">delete</span>
    `;
    ul.appendChild(li);
  });
}

// function renderBooks() {

//     ul.innerHTML = "";

//     books.forEach(book => {

//         let li = document.createElement("li");

//         li.innerHTML = `
//             <span class="name">${book}</span>
//             <span class="delete">delete</span>
//         `;

//         ul.appendChild(li);
//     });
// }

 saveBooks();
 renderBooks();

document
    .getElementById("book-list")
    .addEventListener("click",(event) => {

        if (
            event.target.classList.contains("delete")
        ) {

            const li =
                event.target.parentElement;

            const bookName =
                li.querySelector(".name").textContent;

            books = books.filter(
                book => book !== bookName
            );

            saveBooks();

            renderBooks();
        }
    });


const addForm =
    document.getElementById("add-book");

addForm.addEventListener("submit",(event) => {

        event.preventDefault();

        const input =
            addForm.querySelector("input");

        const newBook =
            input.value.trim();
        
        if (!newBook.trim()) {
            alert("No input to add");
            return;
        }

        const exists = books.some(book => book === newBook.trim());

        if (exists) {
            alert("Book Already Exists");
            return;
        }

        books.push(newBook.trim());

        saveBooks();
        renderBooks();
        input.value = "";            
});

const searchBook = document.querySelector("#search-books input");

searchBook.addEventListener("keyup", () => {
  const searchTerm = searchBook.value.trim().toLowerCase();

  const filteredBooks = books.filter(book =>
    book.toLowerCase().includes(searchTerm)
  );

  renderBooks(filteredBooks);
});
