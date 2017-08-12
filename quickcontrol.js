const jsonfile = require('jsonfile');

const dbfile = './db.json';

module.exports.CleanDB = callback => {
  jsonfile.writeFile(dbfile, [], err => {
    if (err) return callback(err);
  });
};