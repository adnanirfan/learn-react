import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



function toggleStore(state = false, action) {
  switch (action.type) {
    case 'SwitchTrue':
      return true;
    case 'SwitchFalse':
      return false;
    case 'Toggle':
      return state ? false : true;
    default:
      return '';
  }
}

let store = createStore(toggleStore);

store.subscribe(() => {
  console.log(store.getState());
});


// setInterval(() => {
//   store.getState() ? store.dispatch({ type: 'SwitchFalse' }) : store.dispatch({ type: 'SwitchTrue' });
// }, 1000)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <div>
        {store.getState() && <button onClick={() => store.dispatch({ type: 'SwitchFalse' })}>SwitchFalse</button>}
        <br />
        {!store.getState() && <button onClick={() => store.dispatch({ type: 'SwitchTrue' })}>SwitchTrue</button>}
        <br />
        <button onClick={() => store.dispatch({ type: 'Toggle' })}>Toggle Switch</button>
      </div>
    </div>
  </Provider>
  ,
  document.getElementById('root')
);
