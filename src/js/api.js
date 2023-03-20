const BASE_URL = 'www.googleapis.com/books';
const API_KEY = 'AIzaSyB5N6znZPkO97yxX04QwMbQ_K9Z9BPTspA';

fetch(`https://${BASE_URL}/v1/volumes?q=IT&key=${API_KEY}&maxResults=10`)
  .then(response => response.json())
  .then(res => {
    const popBooks = [];

    res.items.map(item => {
      const imgSrc =
        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      const title = item.volumeInfo.title;
      const authors = item.volumeInfo.authors
        ? item.volumeInfo.authors
        : 'unknown';
      const amount = item.saleInfo.listPrice
        ? item.saleInfo.listPrice.amount
        : item.saleInfo.saleability;
      const rating =
        item.volumeInfo.averageRating && item.volumeInfo.averageRating;

      popBooks.push({
        img: `${imgSrc}`,
        title: `${title}`,
        author: `${authors}`,
        price: `${amount}`,
        rate: `${rating}`,
      });
    });

    localStorage.setItem('pop', JSON.stringify(popBooks));
  })
  .catch(err => console.error(err));

fetch(`https://${BASE_URL}/v1/volumes?q=trees&key=${API_KEY}&maxResults=10`)
  .then(response => response.json())
  .then(res => {
    const deposits = [];

    res.items.map(item => {
      const imgSrc =
        item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
      const title = item.volumeInfo.title;
      const authors = item.volumeInfo.authors
        ? item.volumeInfo.authors
        : 'unknown';
      const amount = item.saleInfo.listPrice
        ? item.saleInfo.listPrice.amount
        : item.saleInfo.saleability;
      const rating =
        item.volumeInfo.averageRating && item.volumeInfo.averageRating;

      deposits.push({
        img: `${imgSrc}`,
        title: `${title}`,
        author: `${authors}`,
        price: `${amount}`,
        rate: `${rating}`,
      });
    });
    localStorage.setItem('deposits', JSON.stringify(deposits));
  })
  .catch(err => console.error(err));
