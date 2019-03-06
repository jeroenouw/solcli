import 'reflect-metadata'
import { Container } from 'inversify';
import { SolCLI } from './solcli'
import { Logger } from './utils/logger';
import { Dependencies } from './utils/dependencies';
import { CreateProject } from './options/create-project';
import { CreateContract } from './options/create-contract';

export function index(): SolCLI {
  const container: Container = new Container();

  // Utils
  container.bind<Logger>('Logger').to(Logger).inSingletonScope();
  container.bind<Dependencies>('Dependencies').to(Dependencies).inSingletonScope();

  // Options
  container.bind<CreateProject>('CreateProject').to(CreateProject).inSingletonScope();
  container.bind<CreateContract>('CreateContract').to(CreateContract).inSingletonScope();

  // Sol CLI
  container.bind<SolCLI>('SolCLI').to(SolCLI).inSingletonScope();

  return container.get<SolCLI>('SolCLI');
};

index();
