import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App';
import './index.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function counterStore(count = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return count + 1;
    case 'DECREMENT':
      return count - 1;
    default:
      return count;
  }
}
let store = createStore(counterStore);

store.subscribe(() => {
  console.log(store.getState());
})

setInterval(() => {
  store.dispatch({ type: 'INCREMENT' })
}, 1000)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
