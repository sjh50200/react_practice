import React from 'react';
import ReactDOM from 'react-dom';
import ModifyAble from './ModifyAble';
import ReadOnly from './ReadOnly';

ReactDOM.render(
  <React.StrictMode>
    <ReadOnly />
    <ModifyAble />
  </React.StrictMode>,
  document.getElementById('root')
);

