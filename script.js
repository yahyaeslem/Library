
const form = document.querySelector('form');
const tableBody =document.querySelector('.tableBody')
form.addEventListener('submit', handleSubmit);
const btnNewBook = document.querySelector(".btnNewBook")
const submitButton = document.querySelector(".submit")
const formcancel =form.querySelector('img');


formcancel.addEventListener('click', toggle);
let newBook;
let myLibrary =[];

class Book {
constructor(title,author,number,read) {
    this.title =title;
    this.author = author
    this.number =number
    this.read=read
}
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
        <td>
            <form action="" class="readBox">
                 <label class="switch" >
                    <input type="checkbox" class="checkbox" id=`+i+`>
                     <span class="slider round" id=`+ i +`></span>
                </label>
             </form>
        </td>
        <td > 
            <img src="icons/x-sq.svg" alt="" class="removeBtn" id=`+ i  + ` >
        </td>
    </tr> `;
    
  
    }
    for(let u=0 ; u<myLibrary.length ; u++ )
    if(myLibrary[u].read === 'Read'){
        document.getElementById(u).checked = true;
        }
    
}




 document.addEventListener("keydown", function(event) {
    if(event.keyCode === 27){
       //Esc key was pressed
      toggle()
   }
});
document.addEventListener("click", function(e){
    const target = e.target.closest(".removeBtn"); 
  
    if(target){
       
     ;
      e.target.parentNode.parentNode.remove();
            myLibrary.splice(Number(e.target.id), 1);
            
    }
    displayBooks();
  });

  document.addEventListener("click", function(e){
    const target = e.target.closest(".slider"); 
//    const checked= document.getElementsByClassName('checbox').checked
       const checkbox= e.target.previousElementSibling
        const checkedBox = checkbox.checked
    if(target ){
       if(checkedBox){
        myLibrary[e.target.id].read= "Unread"
        console.log("1")
       }
       else{
        myLibrary[e.target.id].read= "Read"
        // myLibrary[e.target.id].read= "Read"
       }
        displayBooks();
       }
       
   
    
  });




  displayBooks();
