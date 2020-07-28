import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => {
  return (<div>
    {/* <h2>Hello!</h2> */}
      <App />
  </div>)
  //debugger
//   return (<Provider store={store}>
    
//     {/* <HashRouter> */}
//       <App />
//     {/* </HashRouter> */}
//   </Provider>)
 };

export default Root;