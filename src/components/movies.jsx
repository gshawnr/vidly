import React, { Component } from "react";
import { orderBy } from "lodash";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreServices";
import MoviesTable from "./moviesTable";
import { paginate } from "../utils/paginate";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    currentGenre: {},
    currentPage: 1,
    genres: [],
    movies: [],
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount = () => {
    const currentGenre = { _id: "0", name: "All Genres" };
    const genres = [currentGenre, ...getGenres()];
    const movies = getMovies();
    this.setState({ movies, genres, currentGenre });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    console.log("movies.jsx handleLike movie", movie);
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleGenreChange = (genre) => {
    this.setState({ currentGenre: genre, currentPage: 1 });
  };

  handlePageChange = (page) => {
    const currentPage = page;
    this.setState({ currentPage });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      movies,
      pageSize,
      currentPage,
      genres,
      currentGenre,
      sortColumn,
    } = this.state;

    let filteredMovies = movies.filter((m) => {
      if (currentGenre._id === "0") return true;
      return currentGenre._id === m.genre._id;
    });
    const count = filteredMovies.length;

    const sortedMovies = orderBy(
      filteredMovies,
      sortColumn.path,
      sortColumn.order
    );

    const paginatedMovies = paginate(sortedMovies, currentPage, pageSize);

    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={currentGenre}
            handleItemSelect={this.handleGenreChange}
          />
        </div>
        <div className="col">
          <p>Showing {count} movies</p>
          <MoviesTable
            movies={paginatedMovies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={this.state.sortColumn}
          />
          <Pagination
            itemsCount={count}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
