const path = require('path');
let db = require('diskdb');

const DATA_PATH = path.resolve(__dirname, '..', 'data');
const FEATURED_DATA_PATH = path.resolve(__dirname, '..', 'data');

db = db.connect(DATA_PATH, ['items']);
db = db.connect(FEATURED_DATA_PATH, ['featured']);

function read(amt, page) {
  const result = db.items.find().filter((c) => c.rating === undefined || c.rating === null);
  // const result = db.items.find({ rating: null });
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

function featuredRead(amt, page) {
  const result = db.featured.find().filter((c) => c.type === 'film');
  const start = (page * amt) - amt;
  const end = (page * amt);
  const entities = result.slice(start, end);
  return entities;
}

module.exports = {
  write,
  read,
  featuredRead,
};
