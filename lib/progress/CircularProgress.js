import React, { Component, PropTypes } from 'react';

import './circularprogress.scss';

export default class CircularProgress extends Component {

  constructor( props ) {
    super( props );
  }

  render() {

    return (
      <div mode="indeterminate" value="0" min="0" max="100" className="progress">
        <div className="inner-container">
          <svg viewBox="0 0 100 100">
		      <g fill="none" strokeWidth="8" strokeMiterlimit="1" strokeLinecap="round">
		        <path stroke="rgb(0, 188, 212)" d="M50 95C25.1 95 5 74.9 5 50S25.1 5 50 5s45 20.1 45 45c0 24.8-20.3 45-45 45"/>
		      </g>
          </svg>
        </div>
      </div>
    );
  }
}

CircularProgress.propTypes = {
};
