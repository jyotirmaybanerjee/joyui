import React, { Component, PropTypes } from 'react';
import './raisedbutton.sass';

export default class RaisedButton extends Component {

  constructor(props) {
    super(props);
  }

  render() {

  	let kind = this.props.disabled ? 'disabled' : (this.props.primary ? 'primary' : this.props.secondary ? 'secondary' : 'default');

  	let raisedBtnClass = 'raised-btn' + (this.props.fullWidth ? ' full-width' : '')
  	let innerContainerClass = `inner-container ${kind}`;
  	let innerSpanClass = `inner-span ${kind}`;

  	let btn = (

		<button type="button" className={kind} >
			<div>
				<div className={innerContainerClass}>
					<span className={innerSpanClass}>{this.props.children}</span>
				</div>
			</div>
		</button>
  	);

  	if(this.props.kind === 'disabled') {
  		btn = (
			<button disabled='' type="button" className={kind} >
				<div className={innerContainerClass}>
					<span className={innerSpanClass}>{this.props.children}</span>
				</div>
			</button>
	  	);
  	}

    return (
		<div className={raisedBtnClass}>
			{btn}
		</div>
    );
  }
}

function exclusiveTypeCheck(props, propName) {
  if(props['primary'] && props['secondary']) {
  	return new Error('A button can not be more than one type');
  }
  return null;
}

RaisedButton.propTypes = {
	primary: exclusiveTypeCheck,
	secondary: exclusiveTypeCheck
};
