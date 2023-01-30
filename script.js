
const form = document.querySelector('form');
const tableBody =document.querySelector('.tableBody')
form.addEventListener('submit', handleSubmit);
const btnNewBook = document.querySelector(".btnNewBook")
const submitButton = document.querySelector(".submit")
const formcancel =document.querySelector('img');

formcancel.addEventListener('click', toggle);
let newBook;
let myLibrary =[];

function Book(title,author,number,read) {
    this.title =title;
    this.author = author
    this.number =number
    this.read=read
}

let tolkien = new Book("Lord of The Rings",  "J.R.R Tolkien", "1020","Read")
myLibrary.push(tolkien);
let harrypotter = new Book("Harry Potter", "J.K Rowling", "1320","Unread")
myLibrary.push(harrypotter);
var books;
function addBookToLibrary(value){
   newBook = new Book (value.title, value.author, value.number, value.read)
    myLibrary.push(newBook);
displayBooks();
}   

    

form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
        event.preventDefault();
      
     
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    addBookToLibrary(value);
    form.reset();
    toggle();
  
   

   }

function toggle(){
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var formNewBook = document.getElementById("formNewBook");
    formNewBook.classList.toggle('active');
}



function displayBooks(){
    tableBody.innerHTML="";
for(let i=0 ; i<myLibrary.length ; i++ ){
  
    tableBody.innerHTML = tableBody.innerHTML +
    `<tr > 
        <td>` + myLibrary[i].title +`</td>
        <td>` + myLibrary[i].author +`</td>
        <td>` + myLibrary[i].number +`</td>
        <td>`+myLibrary[i].read +`</td>
        <td > 
            <button class="removeBtn" ` + `id=`+ i  + `  ><img src="/icons/x-sq.svg" alt="" ></button>
        </td>
    </tr> `
   
}


};

displayBooks();

 document.addEventListener("keydown", function(event) {
    if(event.keyCode === 27){
       //Esc key was pressed
      toggle()
   }
});
const removeBtn =tableBody.querySelectorAll('img');

    removeBtn.addEventListener ("click" , (e) => {
            console.log(Number(e.target.id));
            myLibrary.splice(Number(e.target.id), 1);
            e.target.parentNode.remove();
        })