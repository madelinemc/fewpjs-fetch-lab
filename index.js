function fetchBooks() { 
return fetch('https://anapioficeandfire.com/api/books') //fetchBooks() should return the fetch()
.then(function(response) {
  return response.json(); //the returned response should be converted to JSON 
})
.then(function(json) { //then call renderBooks() passing in the API's returned JSON as the argument
  renderBooks(json);
})
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
