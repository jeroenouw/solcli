const fs = require('fs');

import { injectable, inject } from 'inversify';
import { Logger } from '../utils/logger';
import { Dependencies } from '../utils/dependencies';

@injectable()
export class CreateProject {

    constructor(
        @inject('Logger') private logger: Logger,
        @inject('Dependencies') private dependencies: Dependencies) {}

    public async createProject(setupName: string) {
        this.logger.showInfo('Creating necessary files and installing dependencies. This may take a while...');
        try {
            fs.statSync(setupName);
        } catch (error) {}
        
        if (!fs.existsSync(setupName)) {
            await fs.mkdirSync(setupName);
        }
        if (!fs.existsSync(process.cwd() + `/${setupName}/contracts`)) {
            await fs.mkdirSync(process.cwd() + `/${setupName}/contracts`);
        }
        if (!fs.existsSync(process.cwd() + `/${setupName}/migrations`)) {
            await fs.mkdirSync(process.cwd() + `/${setupName}/migrations`);
        }
        if (!fs.existsSync(process.cwd() + `/${setupName}/test`)) {
            await fs.mkdirSync(process.cwd() + `/${setupName}/test`);
        }
        
        this.dependencies.installDependencies(setupName);
    };
    
}
