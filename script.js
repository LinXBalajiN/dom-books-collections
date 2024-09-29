let popupOverlay = document.querySelector(".popup-overlay");
let popupBox = document.querySelector(".popup-box");

//select add popup button for create book popup box
let addPopupButton = document.getElementById("add-popup-button");

addPopupButton.addEventListener("click", function(){
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

//select cancel button in popup box
let cancelPopup = document.getElementById("cancel-popup");

cancelPopup.addEventListener("click", function(e){
    e.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

//select container, add-book,book-title,book-author-name, book-short-description in a popup box for insert a new book list
let container = document.getElementsByClassName("container");
let addBook = document.getElementById("add-book");
let bookTitle = document.getElementById("book-title");
let authorName = document.getElementById("book-author-name");
let description = document.getElementById("book-short-description");

addBook.addEventListener("click", function(event){
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class","book-container");     //"${}" template literals
    div.innerHTML = `<h1>${bookTitle.value}</h1>
                     <h2>${authorName.value}</h2>
                     <p>${description.value}</p>
                     <button id="del" onclick="del(event)">Delete</button>`;
                     
    container[0].append(div);  
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
    bookTitle.value = "";
    authorName.value = "";
    description.value = "";               
});

//select delete button for delete the book collection summary
// let del = document.getElementById("del");

// del.addEventListener("click", function(event){
//     event.target.parentElement.remove();
// });

function del(event){
    event.target.parentElement.remove();
}
