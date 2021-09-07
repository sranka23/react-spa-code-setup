# React SPA

## Project Setup

- Checkout code and run `npm install`

- `npm start` \
To run the application in development mode run . Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run lint` \
To clean code formatting and run code validation. This runs `prettier`, `eslint`, `stylelint` and `flow`.

- `npm run build` \
To create production ready build. This will build the app for production to the `build` folder.


## Environment Variables

- Instead of adding conditions in JS for environment specific values, we will use environment variables. we can create multiple environment files. `.env` files would not be a part of deployed code but will be used to generate build output by the setup. 

### How to use in HTML ? 

```html
<title>%REACT_APP_MODE%</title>
```
### How to use in JavaScript ? 

```js
console.log(process.env.REACT_APP_MODE);
```

_Note : All environment variables should be prefixed with REACT_APP. eg: MODE should be declared and used as REACT_APP_MODE._


## Routing

We will be using react router to setup routing. Refer [React Router](https://reactrouter.com/web/guides/quick-start) documentation for details and implementation examples.