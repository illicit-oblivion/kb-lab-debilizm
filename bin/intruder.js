import {program} from 'commander';
import {clipboard, copyFile, watchFiles} from '../src/intruderOperations.js';

program
  .command('watch')
  .description('watch for new files to be published')
  .action(() => watchFiles(it => console.log(it)));

program
  .command('clipboard <name>')
  .description('copy a file\'s name to the clipboard')
  .action(clipboard);

program
  .command('copy <name>')
  .description('copy a file\'s name to the intruder\'s directory')
  .action(copyFile);

program.parse(process.argv);
