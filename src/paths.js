const fs = require('fs');
const path = require('path');

const privateDir = path.resolve(path.join(__dirname,'../data/privateFiles'));
const publicDir = path.resolve(path.join(__dirname,'../data/publicFiles'));
const intruderDir = path.resolve(path.join(__dirname,'../data/intruderFiles'));

function ensurePublicDirExists() {
  ensureDirExists(publicDir);
}

function ensurePrivateDirExists() {
  ensureDirExists(privateDir);
}

function ensureIntruderDirExists() {
  ensureDirExists(intruderDir);
}

function ensureDirExists(dir) {
  fs.mkdirSync(dir, {
    recursive: true,
  })
}

module.exports = {
  privateDir,
  publicDir,
  intruderDir,
  ensurePublicDirExists,
  ensurePrivateDirExists,
  ensureIntruderDirExists,
}
