import { red, green, cyan } from 'kleur';
const program = require('commander');

import { injectable } from 'inversify';

@injectable()
export class Logger {

    constructor() {}

    public showHelp(): void {
        return program
            .version('0.0.1')
            .description(cyan('Ultimate cli for Solidity projects'))
            .option('-p, --project', 'initialize Solidity project')
            .option('-c, --contract', 'create a new smart contract')
            .outputHelp();
    }
      
    public showError(message: string | Error, includeHelp = false): void {
        console.error(red('Error: ') + message + '\n');

        if (includeHelp) {
            this.showHelp;
        } else {
            console.log('');
        }
    }
      
    public showSuccess(message: string): void {
        console.log(green('Success: ') + message + '\n');
    }
      
    public showInfo(message: string): void {
        console.info(cyan('Info: ') + message + '\n');
    }
}
