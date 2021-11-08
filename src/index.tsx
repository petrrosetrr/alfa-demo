import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);