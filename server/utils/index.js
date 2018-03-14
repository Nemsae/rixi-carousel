// const fs = require('fs')
const path = require('path');
// const fetch = require('node-fetch');
let db = require('diskdb');

const DATA_PATH = path.resolve(__dirname, '..', 'data');

db = db.connect(DATA_PATH, ['items']);

function read(amt, page) {
  const result = db.items.find().filter((c) => c.rating === null);
  // console.log('result0: ', result0);
  // const result = db.items.find({ type: 'film' });
  // const result = db.items.find({ rating: null });
  console.log('result: ', result);
  const start = (page * amt) - amt;
  const end = (page * amt);
  const entities = result.slice(start, end);
  return entities;
}

function write(id, rating) {
  const query = { uuid: id };
  const update = { rating };
  db.items.update(query, update);
  const item = db.items.findOne({ uuid: parseInt(id, 10) });
  return item;
}

module.exports = {
  write,
  read,
};
