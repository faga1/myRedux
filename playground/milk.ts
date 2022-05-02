// import {createStore,applyMiddleware} from '../src/index.js'
// const initState = {
//     milk: 0
//   };
  
//   function reducer(state = initState, action) {
//     switch (action.type) {
//       case 'PUT_MILK':
        
//         return {...state, milk: state.milk + action.count};
//       case 'TAKE_MILK':
        
//         return {...state, milk: state.milk - action.count};
//       default:
        
//         return state;
//     }
//   }
//   function logger(store) {
//     return function(next) {
//       return function(action) {
//         let result = next(action);
//         console.log('next state', store.getState());
//         console.groupEnd();
//         return result
//       }
//     }
//   }
//   function logger2(store) {
//     return function(next) {
//       return function(action) {
//         let result = next(action);
//         console.log('logger2');
//         return result
//       }
//     }
//   }
  
//   // 在createStore的时候将applyMiddleware作为第二个参数传进去
//   const store = createStore(
//     reducer,
//     applyMiddleware(logger,logger2)
//   )
  
  
//   store.subscribe(() => console.log(store.getState()));
  
//   store.dispatch({ type: 'PUT_MILK',count:1 });    // milk: 1
//   store.dispatch({ type: 'PUT_MILK',count:1 });    // milk: 2
//   store.dispatch({ type: 'TAKE_MILK',count:1 });   // milk: 1




import { createStore, combineReducer } from '../src/index.js';

const initMilkState = {
  milk: 0
};
function milkReducer(state = initMilkState, action) {
  switch (action.type) {
    case 'PUT_MILK':
      return {...state, milk: state.milk + action.count};
    case 'TAKE_MILK':
      return {...state, milk: state.milk - action.count};
    default:
      return state;
  }
}

const initRiceState = {
  rice: 0
};
function riceReducer(state = initRiceState, action) {
  switch (action.type) {
    case 'PUT_RICE':
      return {...state, rice: state.rice + action.count};
    case 'TAKE_RICE':
      return {...state, rice: state.rice - action.count};
    default:
      return state;
  }
}

// 使用combineReducers组合两个reducer
const reducer = combineReducer({milkState: milkReducer, riceState: riceReducer});

let store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

// 操作🥛的action
store.dispatch({ type: 'PUT_MILK', count: 1 });    // milk: 1
store.dispatch({ type: 'PUT_MILK', count: 1 });    // milk: 2
store.dispatch({ type: 'TAKE_MILK', count: 1 });   // milk: 1

// 操作大米的action
store.dispatch({ type: 'PUT_RICE', count: 1 });    // rice: 1
store.dispatch({ type: 'PUT_RICE', count: 1 });    // rice: 2
store.dispatch({ type: 'TAKE_RICE', count: 1 });   // rice: 1