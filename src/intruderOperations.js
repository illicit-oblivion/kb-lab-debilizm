import * as fs from 'fs';
import {ensureIntruderDirExists, ensurePublicDirExists, intruderDir, publicDir} from "./paths.js";
import {execSync} from "child_process";
import * as path from "path";

export function watchFiles(
  callback,
) {
  ensurePublicDirExists();

  fs.watch(publicDir, (_, filename) => {
    callback(filename);
  });
}

export function clipboard(name) {
  const fileName = path.join(publicDir, name);
  console.log('File\'s contents are ready to be pasted...')
  execSync(`xclip -l 1 -selection c -i ${fileName}`);
}

export function copyFile(name) {
  ensureIntruderDirExists();
  const fileName = path.join(publicDir, name);
  const distName = path.join(intruderDir, name);
  fs.copyFileSync(fileName, distName);
  console.log('File has been copied')
}
