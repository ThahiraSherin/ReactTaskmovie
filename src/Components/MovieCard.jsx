import { Link } from 'react-router';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'}
        alt={movie.Title}
        className="image"
      />
      <h2 className="title">{movie.Title}</h2>
      <p className="image-title">{movie.Year}</p>
      <Link
        to={`/movie/${movie.imdbID}`}
        className="Details"
      >
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
