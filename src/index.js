import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'App';

// style
import 'assets/style/style.css';

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider } from 'context';
import { Provider } from 'react-redux';

import { store } from 'store/store';

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
