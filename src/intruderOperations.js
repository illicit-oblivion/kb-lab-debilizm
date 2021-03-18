const fs = require('fs');
const {ensureIntruderDirExists, ensurePublicDirExists, intruderDir, publicDir} = require("./paths.js");
const {execSync} = require("child_process");
const path = require('path');

function watchFiles(
  callback,
) {
  ensurePublicDirExists();

  fs.watch(publicDir, (_, filename) => {
    callback(filename);
  });
}

function clipboard(name) {
  const fileName = path.join(publicDir, name);
  console.log('File\'s contents are ready to be pasted...')
  execSync(`xclip -l 1 -selection c -i ${fileName}`);
}

function copyFile(name) {
  ensureIntruderDirExists();
  const fileName = path.join(publicDir, name);
  const distName = path.join(intruderDir, name);
  fs.copyFileSync(fileName, distName);
  console.log('File has been copied')
}

module.exports = {
  watchFiles,
  clipboard,
  copyFile
}
