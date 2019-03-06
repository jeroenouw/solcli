import minimist from 'minimist';

import { injectable, inject } from 'inversify';
import { Logger } from './utils/logger';
import { CreateProject } from './options/create-project';
import { CreateContract } from './options/create-contract';

@injectable()
export class SolCLI {

    constructor(
        @inject('Logger') private logger: Logger,
        @inject('CreateProject') private createProject: CreateProject,
        @inject('CreateContract') private createContract: CreateContract) {
        this.executeSolCLI();
    }

    public async executeSolCLI(): Promise<any> {
        const argv: minimist.ParsedArgs = minimist(process.argv.slice(2), { '--': true });

        const showHelp: boolean = argv.h || argv.help;
        const projectName: string = argv.p || argv.projectName;
        const contractName: string = argv.c|| argv.contractName;

        if (showHelp) {
            return this.logger.showHelp();
        }
    
        if (projectName) {
            return this.createProject.createProject(projectName);
        }    
        
        if (contractName) {
            return this.createContract.createContract(contractName);
        }
    }
}
