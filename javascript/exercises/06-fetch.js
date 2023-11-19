const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');



const addBookToDom = (book) => {
  // Create a new element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  const bookElement = document.createElement('div');
  const titleElement = document.createElement('h3');
  const authorElement = document.createElement('p');
  const releaseDateElement = document.createElement('p');
  const numberOfPagesElement = document.createElement('p');

  titleElement.textContent = book.name;
  authorElement.textContent = book.authors;
  releaseDateElement.textContent = book.released.substring(0, 4);
  numberOfPagesElement.textContent = book.numberOfPages;

  bookElement.append(titleElement);
  bookElement.append(authorElement);
  bookElement.append(releaseDateElement);
  bookElement.append(numberOfPagesElement);

  app.append(bookElement);
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url).then((response) => {
    return response.json();
  }).then((data) => {
    data.forEach(book => {
      addBookToDom(book);
    });
  }).catch((error) => {
    let errorElement = document.createElement('div');
    errorElement.textContent = `Error: ${error}`;
    app.append(errorElement);
  }).finally(() => {
    let loader = document.querySelector('#loading');
    app.removeChild(loader);
  });
};




let array = fetchData(url);
