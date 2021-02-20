import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './store/store'
import Root from './components/root'



document.addEventListener('DOMContentLoaded', () => {
     
    let store ;
    if(window.currentUser){
      const preloadedState = {
        session: {currentUser: window.currentUser },
        ui: { modal: {},
             loading: true,
             feedLoading: false,
             trendLoading:true
           }
         };
         store = configureStore(preloadedState)
     }else{
      //store ;
     
    }

    
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
 });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
