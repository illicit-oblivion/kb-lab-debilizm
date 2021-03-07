import * as fs from 'fs';
import * as path from 'path';
import {ensurePrivateDirExists, ensurePublicDirExists, privateDir, publicDir} from "./paths.js";

export function createFile(
  name,
  contents,
) {
  ensurePrivateDirExists();
  fs.writeFileSync(path.join(privateDir, name), contents);
}

export function listFiles() {
  ensurePrivateDirExists();
  return [...fs.readdirSync(privateDir)];
}

export function publishFile(
  name,
) {
  ensurePublicDirExists();
  fs.renameSync(path.join(privateDir, name), path.join(publicDir, name));
}
