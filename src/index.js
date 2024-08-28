import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import StoreContextProvider from './store'; // Ensure the path is correct

ReactDOM.render(
  <StoreContextProvider>
    <App />
  </StoreContextProvider>,
  document.getElementById('root')
);
