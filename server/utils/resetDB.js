/**
 * Util for
 *  1. Reset DB
 *
 */
const fs = require('fs');
const path = require('path');

const INITIAL_DATA_PATH = path.resolve(__dirname, '..', 'data', 'initialDB.json');
const RESET_DATA_PATH = path.resolve(__dirname, '..', 'data', 'items.json');
// console.log('INITIAL_DATA_PATH: ', INITIAL_DATA_PATH);
// console.log('RESET_DATA_PATH: ', RESET_DATA_PATH);

function resetDB() {
  fs.createReadStream(INITIAL_DATA_PATH).pipe(fs.createWriteStream(RESET_DATA_PATH));
}

resetDB();

module.exports = {
  resetDB,
};
