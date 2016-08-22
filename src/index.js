import React, { Component } from 'react';
import { render } from 'react-dom';

import Body from './components/body/Body';

import './styles/index.sass';

class App extends Component {

  render() {
	return (
	  <Body />
	);
  }
}

render(
  <App/ >,
  document.getElementById('root')
);
