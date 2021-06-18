import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignIn from './pages/SignIn/index';
import TestePage2 from './pages/TestePage2/indexTestePage2'
import Folder from './pages/DTIFolder/DTIFolder'
ReactDOM.render(
  <React.StrictMode>
  
  <Folder />
  <App />
 {/* <SignIn />
  <TestePage2 />  */} 
  </React.StrictMode>,
  document.getElementById('root')
  ); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
