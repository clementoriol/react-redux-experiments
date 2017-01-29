# 01. Redux-only counter

As displayed in [Dan Abramov's Egghead course on redux](https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch)
this is a simple implementation of Redux's combineReducers.

## Usage

### Install dependencies
```
yarn install
```

### Start the tests
```
yarn run test
```

### Usage
- Take a look at the `reducers.js` file and its tests `reducers.spec.js`
- Check the custom implementation of combineReducers in `combineReducers.js`, which returns a reducer that reduces the whole state tree
- Check the tests in `combineReducers.spec.js` to see how it's used and how it works like separate reducers
