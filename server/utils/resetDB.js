/**
 * Util for resetting the DB
 *
 */
const fs = require('fs');
const path = require('path');

const INITIAL_DATA_PATH = path.resolve(__dirname, '..', 'data', 'initialDB.json');
const RESET_DATA_PATH = path.resolve(__dirname, '..', 'data', 'items.json');

function resetDB() {
  fs.createReadStream(INITIAL_DATA_PATH).pipe(fs.createWriteStream(RESET_DATA_PATH));
}

resetDB();

module.exports = {
  resetDB,
};
