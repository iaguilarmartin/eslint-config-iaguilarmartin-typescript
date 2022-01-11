# eslint-config-iaguilarmartin-typescript

This package provides `.eslintrc` as an extensible shared configuration. There
are two different configurations available. The default one for vanilla
JavaScript or Node applications and an specific for React applications. Both
configurations include specific rules for **jest** testing framework in case you
want to implement tests in your project.

## Usage

Make sure regular Airbnb config setup is done. See
[eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), or
[eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
if it is a node app.

Install the following dependencies

#### with npm

```bash
npm install prettier \
            eslint-config-iaguilarmartin-typescript \
            eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
            --save-dev
```

#### with yarn

```bash
yarn add -D prettier \
            eslint-config-iaguilarmartin-typescript \
            eslint-config-airbnb-typescript \
            @typescript-eslint/eslint-plugin@^5.0.0 \
            @typescript-eslint/parser@^5.0.0 \
```

### Usage in React apps

Create a **.eslintrc** file with the following content:

```json
{
  "extends": "iaguilarmartin-typescript/react",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Include the following scripts in your **package.json** file:

```json
    "lint": "eslint --ext .js,.ts,.jsx,.tsx ./",
    "lint:fix": "eslint --ext .js,.ts,.jsx,.tsx ./ --fix",
```

Create a **.prettierrc** file with this content:

```json
"./node_modules/iaguilarmartin/eslint-config-iaguilarmartin-typescript/.prettierrc.json"
```

### Usage in Node apps

Install the following dependencies

#### with npm

Create a **.eslintrc** file with the following content:

```json
{
  "extends": "iaguilarmartin-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

Include the following scripts in your **package.json** file:

```json
    "lint": "eslint --ext .js,.ts ./",
    "lint:fix": "eslint --ext .js,.ts ./ --fix",
```

Create a **.prettierrc** file with this content:

```json
"./node_modules/eslint-config-iaguilarmartin-typescript/.prettierrc.json"
```

## Integration into VSCode

In order to properly integrate ESLint and Prettier inside **VSCode** so that the
code is formatted automatically on the file after changes are done follow the
next steps:

1. Install
   [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Install
   [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
3. Apply these settings at **user** level in _VSCode_

```json
"files.autoSave": "onFocusChange",
"prettier.singleQuote": true,
"prettier.requireConfig": true,
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true,
"eslint.validate": [
  "javascript",
  "javascriptreact",
  {
    "language": "typescript",
    "autoFix": true
  },
  {
    "language": "typescriptreact",
    "autoFix": true
  }
],
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
},
```
