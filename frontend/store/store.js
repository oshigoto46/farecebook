import { createStore, applyMiddleware } from 'redux';
import RootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';
// import { logger } from 'redux-logger'

const middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
  // must use 'require' (import only allowed at top of file)
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}

const configureStore = (preloadedState = {} ) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(...middlewares))
}

export default configureStore;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import RootReducer from '../reducers/root_reducer';


// const middleWares = [thunk];

// if(process.env.NODE_ENV !== 'production'){
//     const{logger} = require('redux-logger')
//     middleWares.push(logger);
//     //本番環境意外ではmiddlewareにloggerを追加
// }

// const configureStore = (preloadedState = {}) =>{
//     console.log(JSON.stringify(RootReducer));
//     return createStore(RootReducer, preloadedState, applyMiddleware(...middleWares))
// }

// export default configureStore;











