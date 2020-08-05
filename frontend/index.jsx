import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');

  window.getState = store.getState
  window.currentUser = store.currentUser


  ReactDOM.render(<Root store={store}/>, root);
});