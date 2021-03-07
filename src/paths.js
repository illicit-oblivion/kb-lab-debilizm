import fs from 'fs';
import path from 'path';

export const privateDir = path.resolve('../data/privateFiles');
export const publicDir = path.resolve('../data/publicFiles');
export const intruderDir = path.resolve('../data/intruderFiles');

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
