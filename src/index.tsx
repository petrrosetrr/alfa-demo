import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import {fetchData} from './redux/imagesSlice';

store.dispatch(fetchData());
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
