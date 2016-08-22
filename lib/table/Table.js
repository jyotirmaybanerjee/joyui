import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import Row from './Row';
import './table.sass';

export default class Table extends Component {

  constructor(props) {
    super(props);
    this.state = {
        filterText: ''
    }
  }

  handleUserInput = (filterText) => {
    this.setState({
      filterText: filterText
    });
  }

  getDataCatalogList = () => {
    var rows = [];
    let keyCount = 0;
    this.props.datasets.forEach(function(dataset) {
      if (dataset.name.indexOf(this.state.filterText) === -1) {
        return;
      }
      rows.push(<Row key={'key_' + keyCount++} dataset={dataset} />);
    }.bind(this));

    return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Category</th>
          <th>Type</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    );
  }

  render() {

    let dataListDom = this.getDataCatalogList();
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserInput={this.handleUserInput}/>
        {dataListDom}
      </div>
    );
  }
}

Table.propTypes = {
};
