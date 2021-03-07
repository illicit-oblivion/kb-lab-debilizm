import {execSync} from "child_process";
import {resolve} from "path";

export function CopyFileFromClipboardToFile(filePath) {
    execSync(`xclip -selection clipboard -o ${filePath}`);
}

const destPath = resolve('./intruderFolder/text.txt');

CopyFileFromClipboardToFile(destPath);