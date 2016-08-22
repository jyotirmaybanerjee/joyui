import React, { Component, PropTypes } from 'react';
import './navbar.sass';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav>
            <section className="menu-header">
                <div className="brand">
                    {this.props.brand || ''}
                </div>
            </section>
            {this.props.children}
        </nav>
    );
  }
}

NavBar.propTypes = {
};
