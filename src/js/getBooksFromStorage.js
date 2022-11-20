export function getBooksFromStorage(name) {
  let savedBooks = localStorage.getItem(name);

  if (savedBooks) {
    savedBooks = JSON.parse(savedBooks);
  }
  return savedBooks || [];
}
