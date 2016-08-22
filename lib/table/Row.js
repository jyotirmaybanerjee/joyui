import React, { Component, PropTypes } from 'react';

export default class Row extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.dataset.name}</td>
        <td>{this.props.dataset.description}</td>
        <td>{this.props.dataset.category}</td>
        <td>{this.props.dataset.type}</td>
        <td>{this.props.dataset.popularity}</td>
      </tr>
    );
  }
}

Row.propTypes = {
    dataset: React.PropTypes.object
};
