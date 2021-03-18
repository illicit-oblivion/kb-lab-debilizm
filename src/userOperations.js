const fs = require('fs');
const path = require('path');
const {ensurePrivateDirExists, ensurePublicDirExists, privateDir, publicDir} = require("./paths.js");

function createFile(
  name,
  contents,
) {
  ensurePrivateDirExists();
  fs.writeFileSync(path.join(privateDir, name), contents);
}

function listFiles() {
  ensurePrivateDirExists();
  return [...fs.readdirSync(privateDir)];
}

function listPublicFiles() {
  ensurePublicDirExists();
  return [...fs.readdirSync(publicDir)];
}

function publishFile(
  name,
) {
  ensurePublicDirExists();
  fs.renameSync(path.join(privateDir, name), path.join(publicDir, name));
}

module.exports = {
  createFile,
  listFiles,
  publishFile,
  listPublicFiles
}
