import React from 'react';
// import ReactDOM from 'react-dom'; //! TEMP
import ReactDOM from 'react-dom/client'; //! Нужен ОБЯЗАТЕЛЬНО!

import { ThemeProvider } from '@emotion/react';
import { theme } from 'configs';

import './index.css';

import App from 'components/App/App';



//! Нужен ОБЯЗАТЕЛЬНО!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);


//! TEMP
// ReactDOM.render(<App />, document.querySelector("#root"));

