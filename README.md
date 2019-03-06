# SOLCLI - Ultimate cli for Solidity projects

[![npmversion](https://img.shields.io/npm/v/solcli.svg)](https://github.com/jeroenouw/solcli)
[![npmlicense](https://img.shields.io/npm/l/solcli.svg)](https://github.com/jeroenouw/solcli/blob/master/LICENSE/)
[![downloads](https://img.shields.io/npm/dy/solcli.svg)](https://github.com/jeroenouw/solcli)

## Quickstart

Install solcli as a global CLI.

```shell
npm install -g solcli

cd <your-repo-location>

# Then you run
solcli -p <name-of-your-project>
```

This should setup a project with all the necessary folders and files.

### Commands

```shell

# Create a setup for your Solidity project
solcli -p <your-project-name>
solcli --project <your-project-name>

# Create a default Solidity contract
solcli -c <your-contract-name>
solcli --contract <your-contract-name>


```

## Contributing

Want to file a bug, contribute some code, or improve documentation? Feel free to place an [issue](https://github.com/jeroenouw/solcli/issues).

First fork this project.

```shell
git clone <your-forked-repo>
npm install

git checkout -b my-fix
# fix some code...

git commit -m "added this feature"
git push origin my-fix
```

Lastly, open a pull request on Github.

## License

[![npmlicense](https://img.shields.io/npm/l/solcli.svg)](https://github.com/jeroenouw/solcli/blob/master/LICENSE/)
