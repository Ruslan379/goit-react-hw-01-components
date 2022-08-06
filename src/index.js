import React from 'react';
// import ReactDOM from 'react-dom'; //! TEMP
import ReactDOM from 'react-dom/client'; //! Нужен ОБЯЗАТЕЛЬНО!

// import { App } from 'components/App'; //? old path
import { App } from 'components/App/App';

import './index.css';

//! Нужен ОБЯЗАТЕЛЬНО!
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//! +++++++++++++++++++++++++++++++++++++++++++
//! TEMP
// ReactDOM.render(<App />, document.querySelector("#root"));

