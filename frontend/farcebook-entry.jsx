// import React from 'react';
// import ReactDOM from 'react-dom';
// import { login, logout } from './actions/session_actions'
// import configureStore from './store/store'
// import Root from './components/root'
// import { like, unlike } from './actions/likes_actions'

// document.addEventListener('DOMContentLoaded', () => {
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//        session: {currentUser: window.currentUser },
//        ui: { modal: {},
//             loading: true,
//             feedLoading: false,
//             trendLoading:true
//           }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }

//   window.dispatch = store.dispatch;
//   window.like = like;
//   window.unlike = unlike;


//   ReactDOM.render(<Root store={store} />, document.getElementById('root'));
// });


import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root'

class Layout extends React.Component {
    render() {
      return (
        <h1>Welcome!</h1>
      );
    }
  }

document.addEventListener('DOMContentLoaded',()=>{
     let store = {}
     //ReactDOM.render(<Layout/>,document.getElementById('root'))
     ReactDOM.render(<Root store={store}/>,document.getElementById('root'))
});