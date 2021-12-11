import React from 'react';
import ReactDOM from 'react-dom';
import Comics from '../src/index.js';

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Comics />, div);
  ReactDOM.unmountComponentAtNode(div);
})