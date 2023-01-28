

const library=document.querySelector('#library')
 const form = document.querySelector('form');
 const tableBody =document.querySelector('.tableBody')
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
        books = document.createElement('tr');
        tableBody.appendChild(books);
        books.classList.add('books');
        books.setAttribute('id', datacount)
    
        let titlediv = document.createElement('td');
        books.appendChild(titlediv)
        titlediv.classList.add('bookSpec')
        
        let authordiv= document.createElement('td');
        books.appendChild(authordiv)
        authordiv.classList.add('bookSpec')
        let numberdiv= document.createElement('td');
        books.appendChild(numberdiv)
        numberdiv.classList.add('bookSpec')
        let readdiv = document.createElement('td')
        books.appendChild(readdiv)
        readdiv.classList.add('bookSpec')
        let readLabel = document.createElement('label')
        let readSelect = document.createElement('select');
        let readOptionYes = document.createElement('option');
        let readOptionNo = document.createElement('option');
        readdiv.appendChild(readLabel)
        readLabel.appendChild(readSelect)
        readSelect.appendChild(readOptionYes)
        readSelect.appendChild(readOptionNo)
        readOptionYes.setAttribute("value","yes") 
        readOptionYes.innerHTML= "Yes"
        readOptionNo.setAttribute("value","no")
        readOptionNo.innerHTML="No"
        // let remove = document.createElement('button');
        // books.appendChild(remove);
        // remove.classList.add('removeBtn')
        // remove.setAttribute('id', datacount)
        readLabel.setAttribute("for", "readform")

        titlediv.innerHTML = value.title;
        authordiv.innerHTML = value.author;
        numberdiv.innerHTML = value.number;

    
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
      


