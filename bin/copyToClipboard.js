import {execSync} from 'child_process';
import {resolve} from 'path';

export function CopyFileToClipboard(filePath) {
    if (filePath) {
        execSync(`xclip -l 2 -selection c -i ${filePath}`)
    } else {
        console.log('No such directory');
    }
}

const destPath = resolve('../directory/destination.txt');

CopyFileToClipboard(destPath);