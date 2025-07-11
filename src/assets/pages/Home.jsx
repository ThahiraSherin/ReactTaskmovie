import { useEffect, useState } from 'react';
import { searchMovies } from '../../api/omdb';
import MovieCard from '../../Components/MovieCard';
import Pagination from '../../Components/Pagination';
import SearchBar from '../../Components/Searchbar';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const handleSearch = async (event) => {
    event.preventDefault();
    if (searchTerm.trim() === '') return;

    setLoading(true);
    setError('');
    try {
      const response = await searchMovies(searchTerm);
      console.log(response);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setMovies([]);
        setError(response.data.Error);
      }
    } catch {
      setError('Something went wrong!');
    }
    setLoading(false);
  };
  

  useEffect(() => {
    if (searchTerm.trim() !== '') {
      fetchMovies(currentPage);
    }
  }, [currentPage]);

  const totalPages = Math.ceil(totalResults / 10);


  return (
     <div className="home" >
      <div className="movie">
        <h1 className="movie-title">Movie Search App 🎬</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
      />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="moviecard">
        {movies.map((movie) => (
          <MovieCard 
          key={movie.imdbID} 
          movie={movie} />
        ))}
      </div>

            {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          setCurrentResult = {setCurrentResult}
        />
      )}
    </div>
    </div>
  );
};

export default Home;
    
