// import React from 'react';
// import { Provider } from 'react-redux';
// import App from './app';
// import { HashRouter } from 'react-router-dom';

// const Root = ({ store }) => (
//   <Provider store={store}>
//     <HashRouter>
//       <App />
//     </HashRouter>
//   </Provider>
// );

// export default Root;

import React from 'react';
import {Provider} from 'react-redux';
import Layout from './layout'

const Root  = ({store}) =>(
  // 毎回再レンダリングをする
  <Provider store={store}> 
    <Layout/>
  </Provider>
)

export default Root; 
