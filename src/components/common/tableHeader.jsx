import React, { Component } from "react";

class TableHeader extends Component {
  handleSort = (path) => {
    const { sortColumn, onSort } = this.props;
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    onSort(sortColumn);
  };

  sortColumnIcon = (column) => {
    const {
      sortColumn: { path, order },
    } = this.props;
    if (column.path !== path) return null;

    return order === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="clickable"
              key={column.path || column.key}
              onClick={() => this.handleSort(column.path)}
            >
              {column.label} {this.sortColumnIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
