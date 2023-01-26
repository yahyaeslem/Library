function Book(title,author,pages,read) {
    this.title =title;
    this.author = author
    this.pages =pages
    this.read=false
    function info(){
        return this.info;
    }
}

const btnNewBook = document.querySelector(".btnNewBook")
let newBook;
let myLibrary =[];
function addBookToLibrary(){

    myLibrary.push(newBook);
}
addBookToLibrary();
myLibrary.push('karamazov', 'sefiller', 'suç ve ceza')
var arrayLength = myLibrary.length;
var temp;
function displayBooks(){
    for (i = 0; i < arrayLength; i++) {
    temp = document.createElement('div');
    temp.className = 'books';
    temp.innerHTML = myLibrary[i];
    document.getElementsByTagName('body')[0].appendChild(temp);
  }
}


btnNewBook.addEventListener("click", (e) => { document.querySelector(".formBox").style.display="block"; });
