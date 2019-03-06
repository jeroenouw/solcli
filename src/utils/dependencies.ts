const { exec } = require('child_process');

import fs from 'fs-extra';
import { injectable, inject } from 'inversify';
import { Logger } from './logger';

@injectable()
export class Dependencies {

    constructor(@inject('Logger') private logger: Logger) {}

    public async installDependencies(setupName: string): Promise<any> {
        try {
            await this.createPackageJson(setupName);
            await exec(`cd ${setupName} && npm install `,
            (error: Error) => {
                if (error) {
                    this.logger.showError(error);
                return;
                }
                this.logger.showSuccess(`Created a new ${setupName} Solidity project and installed all dependencies`);
            });
        } catch (error) {
            this.logger.showError(error);
        }
    }

    private createPackageJson(setupName: string): void {
        const fileContent: string = this.fileContent(setupName);
        const filepath: string = process.cwd() + `/${setupName}/package.json`;

        fs.writeFile(filepath, fileContent, (error: Error) => {
            if (error) {
                this.logger.showError('Something went wrong while creating a package.json');
            } 
        });
    }

    private fileContent(setupName: string): string {
        return `{
                "name": "${setupName}",
                "version": "0.0.1",
                "description": "A project setup made with solcli",
                "scripts": {
                    "compile": "truffle compile",
                    "console": "truffle console",
                    "build": "tsc -p .",
                    "lint": "solhint --max-warnings 0"
                },  
                "keywords": [
                    "solidity",
                    "ethereum",
                    "smart contract"
                ],
                "license": "MIT",
                "devDependencies": {
                    "chai": "^4.2.0",
                    "ethereumjs-util": "^6.1.0",
                    "ethjs-abi": "^0.2.1",
                    "ganache-cli": "6.3.0",
                    "solhint": "^2.0.0",
                    "truffle": "^5.0.0"
                }
            }
                `;
    }
}
