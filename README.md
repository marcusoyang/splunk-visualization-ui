## Overview

This is a dashboard visualization for Splunk Enterprise that displays the prices and history of cryptocurrencies. It uses the [Splunk UI Toolkit](https://splunkui.splunk.com/) based on [React](https://reactjs.org/). [Splunk Search Job](https://www.npmjs.com/package/@splunk/search-job) library is used to retrieve the data from Splunk Enterprise. The data is then displayed using [Splunk Visualization](https://www.npmjs.com/package/@splunk/visualizations).

<br>

![Part 1 of the CryptoDashboard](/static/part1.PNG)

<br>

![Part 2 of the CryptoDashboard](/static/part2.PNG)

## Further Information
The following information and instructions were generated by [@splunk/create](https://splunkui.splunk.com/Create/ComponentTutorial).

The project contains a variety of packages that are published and versioned collectively. Each package lives in its own 
directory in the `/packages` directory. Each package is self contained, and defines its dependencies in a package.json file.

We use [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/) and [Lerna](https://github.com/lerna/lerna) for
managing and publishing multiple packages in the same repository.

## Getting Started

1. Clone the repo.
2. Install yarn (>= 1.2) if you haven't already: `npm install --global yarn`.
3. Run the setup task: `yarn run setup`.

After this step, the following tasks will be available:

* `start` – Run the `start` task for each project
* `build` – Create a production bundle for all projects
* `test` – Run unit tests for each project
* `lint` – Run JS and CSS linters for each project
* `format` – Run prettier to auto-format `*.js`, `*.jsx` and `*.css` files. This command will overwrite files without 
asking, `format:verify` won't.

Running `yarn run setup` once is required to enable all other tasks. The command might take a few minutes to finish.


## Developer Scripts

Commands run from the root directory will be applied to all packages. This is handy when working on multiple packages 
simultaneously. Commands can also be run from individual packages. This may be better for performance and reporting when
 only working on a single package. All of the packages have similar developer scripts, but not all scripts are implemented 
 for every package. See the `package.json` of the package in question to see which scripts are available there.

For more granular control of development scripts, consider using [Lerna](https://github.com/lerna/lerna) directly.


## Code Formatting

CryptoDashboard uses [prettier](https://github.com/prettier/prettier) to ensure consistent code formatting. It is recommended
 to [add a prettier plugin to your editor/ide](https://github.com/prettier/prettier#editor-integration).
