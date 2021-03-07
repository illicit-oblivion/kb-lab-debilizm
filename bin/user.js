import {program} from 'commander';
import inquirer from 'inquirer';
import {createFile, listFiles, publishFile} from '../src/userOperations.js';
import * as path from 'path';

program
  .command('create <name>')
  .description('create a new file')
  .action(async name => {
    const contents = (await inquirer.prompt([
      {
        type: 'input',
        name: 'contents',
      },
    ])).contents

    createFile(name, contents);
  });

program
  .command('list')
  .description('list files')
  .action(() => {
    listFiles().forEach(it => console.log(path.basename(it)));
  });

program
  .command('publish <name>')
  .description('publish a file')
  .action(publishFile);

program.parse(process.argv);
