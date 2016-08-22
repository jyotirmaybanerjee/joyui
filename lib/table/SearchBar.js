import React, { Component, PropTypes } from 'react';

export default class SearchBar extends Component {

  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
    this.props.onUserInput(
      event.target.value
      /*var filterText = this.refs.filterTextInput.getDOMNode().value
      this.props.searchData(filterText);*/
    );
  }

  render() {
    return (
      <div className="filter-list">
        <input
          type="text"
          id="search-bar"
          placeholder="Search by name ..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange} />
      </div>);
  }
}

SearchBar.propTypes = {
};
