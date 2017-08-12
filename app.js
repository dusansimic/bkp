const FileChecker = require('./filechecker');
const QuickControl = require('./quickcontrol');

QuickControl.CleanDB(err => {
  if (err) throw err;
  FileChecker.addFiles([
    'firstfile.txt',
    'secondfile.txt'
  ], result => {
    if (result) throw result;
    FileChecker.checkFiles();
  });
});