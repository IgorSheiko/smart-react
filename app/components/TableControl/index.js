import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class TableControl extends Component {

  render() {
    return (
      <BootstrapTable
        data={this.props.data}
        selectRow={this.props.selectRowProp}
        options={this.props.options}
        keyField="id"
        remote
        pagination
        fetchInfo={{ dataTotalSize: this.props.totalSize }}
      >
        {this.props.columns.map((column) => {
          if (column.dataFormat !== undefined) {
            return <TableHeaderColumn key={column.dataField} dataField={column.dataField} dataFormat={column.dataFormat}>{column.name}</TableHeaderColumn>;
          }
          else {
            return <TableHeaderColumn key={column.dataField} dataField={column.dataField}>{column.name}</TableHeaderColumn>;
          }
        }
        )}
      </BootstrapTable>

    );
  }
}

TableControl.propTypes = {
  data: React.PropTypes.array.isRequired,
  selectRowProp: React.PropTypes.object.isRequired,
  columns: React.PropTypes.array.isRequired,
  options: React.PropTypes.object,
  totalSize: React.PropTypes.number.isRequired,
};

export default TableControl;
