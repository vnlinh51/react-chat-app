import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import firebase from 'firebase';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/Store';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyCWTEVBirm_42I-JK-LiCghg5BAERYx7SU',
//   authDomain: 'react-chat-app-b705b.firebaseapp.com',
//   projectId: 'react-chat-app-b705b',
//   storageBucket: 'react-chat-app-b705b.appspot.com',
//   messagingSenderId: '694587913731',
//   appId: '1:694587913731:web:2fe0765761f601b22dc036',
//   measurementId: 'G-69Y1BWEGNM',
// };

// firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
