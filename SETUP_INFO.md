# Process of code setup 

1. Setup [Create React App](https://github.com/facebook/create-react-app) for project boiler plate 

    - _This project has use CRA in its native state, if you want to further customize webpack, babel and eslint, you can run the `npm run eject` command to extract and extend configuration_ 

2. Test configuration

    - Watchmode has been disabled by default using `--watch=false`. This it to avoid a flickery behavior of the coverage tool when run in watch mode. You can chose to remove it locally if you are working on tests and want runs in watch mode 

    - `--env=jest-environment-jsdom-sixteen` is added to support regeneators. Depending on the CRA version this may already be present but has been added as a polyfill. 

3. ESLint Setup
    - `.eslintrc` has been added with standard configuration of rules. The code lint as per industry standards following [airbnb rules](https://www.npmjs.com/package/eslint-config-airbnb)

    - `.stylelintrc` sets standard rules for CSS stylelint based on [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)

    - [Flow](https://flow.org/) has been used to do static type checking. Detailed setup for flow to customize / extend rules can be done via `.flowconfig` 

    - When `npm run lint` is run, it will run the prettier command as well and indent the code as per configurations which will be independent of editor. Prettier configuration can be found in `.prettierrc` file.

4. GIT Checks
    - Every time a developer does `git add .` and then `git commit -m "--some--commit--message"`, lint will be executed. This will guard against any developer manually skipping lint checks before committing code.

## Other Reads

1. [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting) 

2. [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

3. [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

4. [Advanced CRA configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

5. [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
