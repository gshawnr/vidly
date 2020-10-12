import React, { Component } from "react";
import { get } from 'lodash';
import Like from "../common/like";

class TableBody extends Component {
  render() {
    const { data, onLike, onDelete, columns } = this.props;
    console.log('data', data);
    console.log('columns', columns);
    return (
      <tbody>
        {data.map((d) => (
          <tr>
            {columns.map((column) => (
              <td>{get(d, column.path)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;

// columns[index].path
