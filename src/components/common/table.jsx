import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { movies, columns, onSort, sortColumn, onLike, onDelete } = props;

  return (
    <table className="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody
        data={movies}
        onLike={onLike}
        onDelete={onDelete}
        columns={columns}
      />
    </table>
  );
};

export default Table;
