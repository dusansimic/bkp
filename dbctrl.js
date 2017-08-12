const fs = require('fs');
const jsonfile = require('jsonfile');

const dbfile = './db.json';

module.exports.ReadFiles = (callback) => {
  jsonfile.readFile(dbfile, (err, obj) => {
    if (err) throw err;
    var list = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      if (obj[i].type === 'f')
        list.push(obj[i]);
    }
    return callback(list);
  });
};

module.exports.ReadDirs = (callback) => {
  jsonfile.readFile(dbfile, (err, obj) => {
    if (err) throw err;
    var list = [];
    for (let i = 0, len = obj.length; i < len; i++) {
      if (obj[i].type === 'd')
        list.push(obj[i]);
    }
    return callback(list);
  });
};

module.exports.AddBackupObj = (bkpObj, callback) => {
  jsonfile.readFile(dbfile, (err, obj) => {
    if (err) return callback(err);
    obj.push(bkpObj);
    jsonfile.writeFile(dbfile, obj, err => {
      if (err) return callback(err);
    });
    return callback(false);
  });
};