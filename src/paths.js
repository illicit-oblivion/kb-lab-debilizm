import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));


export const privateDir = path.resolve(path.join(__dirname,'../data/privateFiles'));
export const publicDir = path.resolve(path.join(__dirname,'../data/publicFiles'));
export const intruderDir = path.resolve(path.join(__dirname,'../data/intruderFiles'));

export function ensurePublicDirExists() {
  ensureDirExists(publicDir);
}

export function ensurePrivateDirExists() {
  ensureDirExists(privateDir);
}

export function ensureIntruderDirExists() {
  ensureDirExists(intruderDir);
}

function ensureDirExists(dir) {
  fs.mkdirSync(dir, {
    recursive: true,
  })
}
