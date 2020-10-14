import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  render() {
    const { movies, onLike, onDelete, onSort, sortColumn } = this.props;
    const columns = [
      { path: "title", label: "Title" },
      { path: "genre.name", label: "Genre" },
      { path: "numberInStock", label: "Stock" },
      { path: "dailyRentalRate", label: "Rate" },
      {
        key: "like",
        content: (movie) => (
          <Like liked={movie.liked} onClick={() => onLike(movie)}></Like>
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(movie)}
          >
            Delete
          </button>
        ),
      },
    ];

    return (
      <Table
        movies={movies}
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
        onLike={onLike}
        onDelete={onDelete}
      />
    );
  }
}

export default MoviesTable;
