import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../api/omdb';

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const response = await getMovieDetails(id);
        if (response.data.Response === 'True') {
          setMovie(response.data);
          setError('');
        } else {
          setError('Movie not found.');
        }
      } catch {
        setError('Something went wrong.');
      }
      setLoading(false);
    };

    fetchMovie();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!movie) return null;

  return (
    <div className="movie-details">
      <h1 className="poster">{movie.Title} ({movie.Year})</h1>
      <img src={movie.Poster} alt={movie.Title} className="w-60 mb-4" />
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Director:</strong> {movie.Director}</p>
      <p><strong>Actors:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>IMDB Rating:</strong> {movie.imdbRating}</p>
      <button onClick={() => navigate(-1)}>BACK</button>
    </div>
  );
};

export default MovieDetails;
