import React from 'react';
import ReactDOM from 'react-dom';
import ThermZone2 from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LightRoom2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
