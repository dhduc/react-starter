console.log('Hello World!');
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
 
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Counter),
    document.getElementById('hello')
  );
  ReactDOM.render(
    <h1>Main</h1>,
    document.getElementById('main')
  );
});