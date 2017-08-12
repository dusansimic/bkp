const fs = require('fs');

const DatabaseControl = require('./dbctrl');

module.exports.checkFiles = () => {
  DatabaseControl.ReadFiles(list => {
    for (let i = 0, len = list.length; i < len; i++)
      console.log(list[i].name);
  });
};

module.exports.addFiles = (fileList, callback) => {
  for (let i = 0, len = fileList.length; i < len; i++) {
    let obj = {
      name: fileList[i],
      type: 'f'
    };
    DatabaseControl.AddBackupObj(obj, result => {
      return callback(result);
    });
  }
};