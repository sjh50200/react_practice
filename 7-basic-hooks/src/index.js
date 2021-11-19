import React from 'react';
import ReactDOM from 'react-dom';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import UseReducer from './UseReducer';
import UseRef1 from './UseRef1';
import UseRef2 from './UseRef2';

ReactDOM.render(
  <React.StrictMode>
    <UseReducer />
  </React.StrictMode>,
  document.getElementById('root')
);