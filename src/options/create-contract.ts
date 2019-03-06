const fs = require('fs');

import { injectable, inject } from 'inversify';
import { Logger } from '../utils/logger';

@injectable()
export class CreateContract {

    constructor(@inject('Logger') private logger: Logger) {}

    public createContract(contractName: string): void {
        this.logger.showInfo(`Creating your contract...`);

        const fileContent: string = this.fileContent(contractName);
        const filepath: string = process.cwd() + `/contracts/${contractName}.sol`;

        fs.writeFile(filepath, fileContent, (error: Error) => {
            if (error) {
                this.logger.showError(error);
            };
            this.logger.showSuccess(`Created a new ${contractName} Solidity smart contract`);
        });
    };

    private fileContent(contractName: string): string {

        return `pragma solidity 0.5.4;

contract ${contractName} {
    bytes32 exampleString;

    constructor() public {}

    /**
     * @dev this is a example function
     * @param <your-param>
     * @return <your-return-statement>
     */
    function exampleFunction() public {
    }

}
                `;
    }
};
