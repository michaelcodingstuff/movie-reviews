const faker = require('faker');
const fs = require('fs');

const movieUrl = 'movie-data.csv';
const reviewUrl = 'review-data.csv';
const rows = 100;

const movieColumns = 'title';
const reviewColumns = 'username, title, mooz, review, helpful, movie';

fs.writeFile(movieUrl, movieColumns, (err) => {
  if (err) {
    console.log('Data file title write failure', err);
  }
});

fs.writeFile(reviewUrl, reviewColumns, (err) => {
  if (err) {
    console.log('Data file title write failure', err);
  }
});

for (let i = 1; i < rows + 1; i += 1) {
  const titleLength = Math.floor(Math.random() * 3) + 1;
  const id = i;
  const title = `${faker.lorem.sentence(titleLength).toUpperCase().replace('.', ' ')}`;
  const data = `\n${id},${title}`;
  fs.appendFile(movieUrl, data, (err) => {
    if (err) {
      console.log('Data file write failure', err);
    } else {
      // console.log('Successful write to .csv');
    }
  });
}

for (let i = 1; i < rows * 50 + 1; i += 1) {
  const titleLength = Math.floor(Math.random() * 5) + 1; // 1-5

  const id = i;
  const username = `${faker.internet.userName().toUpperCase().replace('.', ' ')}`;
  const title = `${faker.lorem.sentence(titleLength).toUpperCase().replace('.', '')}`; // title of review
  const moozRating = Math.floor(Math.random() * 5) + 1; // rating system
  const reviewText = `${faker.lorem.paragraph()}`;
  const helpfulReviews = Math.floor(Math.random() * 300);
  const movie = Math.floor(Math.random() * rows) + 1;
  // const dateWritten = faker.date.past();

  const data = `\n${id},${username},${title},${moozRating},${reviewText},${helpfulReviews},${movie}`;

  fs.appendFile(reviewUrl, data, (err) => {
    if (err) {
      console.log('Data file write failure', err);
    } else {
      // console.log('Successful write to .csv');
    }
  });
}
