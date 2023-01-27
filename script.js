

const library=document.querySelector('#library')
 const form = document.querySelector('form');
 form.addEventListener('submit', handleSubmit);
const btnNewBook = document.querySelector(".btnNewBook")
const submitButton = document.querySelector(".submit")
let newBook;
let myLibrary =[];
btnNewBook.addEventListener("click", (e) => { document.querySelector(".formBox").style.display="block"; });
function Book(title,author,number,read) {
    this.title =title;
    this.author = author
    this.number =number
    this.read=read
    // function info(){
    //     return this.info;
    // }
}

var books;
function addBookToLibrary(value){
   newBook = new Book (value.title, value.author, value.number, value.read)
    myLibrary.push(newBook);
    var datacount= myLibrary.length- 1;
        books = document.createElement('div');
        library.appendChild(books);
        books.classList.add('books');
        books.setAttribute('id', datacount)
    
       let titlediv = document.createElement('div');
        books.appendChild(titlediv)
        titlediv.classList.add('bookSpec')
        
        let authordiv= document.createElement('div');
        books.appendChild(authordiv)
        authordiv.classList.add('bookSpec')
        let numberdiv= document.createElement('div');
        books.appendChild(numberdiv)
        numberdiv.classList.add('bookSpec')
       let readdiv= document.createElement('button');
        books.appendChild(readdiv)
        readdiv.classList.add('bookSpec')
        let remove = document.createElement('button');
        books.appendChild(remove);
        remove.classList.add('removeBtn')
        remove.setAttribute('id', datacount)
        titlediv.innerHTML = "Title" + ""+ ":"+""+ value.title;
        authordiv.innerHTML = "Author" + ""+ ":"+ ""+value.author;
        numberdiv.innerHTML = "Number" + ""+ ":"+ ""+value.number;
        readdiv.innerHTML = "Read " + ""+ ":"+ ""+value.read;
      
    
}
var removeID;
var temp;
// var removeBtn = document.getElementsByClassName('removeBtn');
// removeBtn.addEventListener('click', removeBook);
// function removeBook(){
   

   
  
 
// }



// function displayBooks(){
//         myLibrary.forEach(function(myBook, index){
            
//             // books.innerHTML= "Name" + ":"+" "+ myLibrary[index].title +"  "+ "Author" + ":"+ myLibrary[index].author +"  "+ "Pages" + ";"+ "  " + myLibrary[index].number, "Read" + ";"+"  "+ myLibrary[index].read;
//         titlediv.innerHTML = "Title" + ""+ ":"+ myLibrary[index].title;
//         authordiv.innerHTML = "Author" + ""+ ":"+ myLibrary[index].author;
//         numberdiv.innerHTML = "Number" + ""+ ":"+ myLibrary[index].number;
//         readdiv.innerHTML = "Read " + ""+ ":"+ myLibrary[index].read;

// })};
        

  


form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
        event.preventDefault();
      
     
    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());
    addBookToLibrary(value);
    // displayBooks()
    form.reset();
   }
submitButton.addEventListener('click',()=> {document.querySelector(".formBox").style.display="none";  } )
      


