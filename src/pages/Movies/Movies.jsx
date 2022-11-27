import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "services/api";
import { MoviesList } from "components/MoviesList/MoviesList";
import Box from "services/Box";

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  }

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }
    getMovieByQuery(query).then(setMovies);
  }, [searchParams]);

  return (
    <Box padding={4}>
      <form onSubmit={handleSubmit}>
        <Box marginRight='10px' display='inline'>
          <input type='text' name='movie' onChange={handleChange} value={searchParams.get('query') ? searchParams.get('query') : query} />
        </Box>
        <button type='submit'>Search</button>
      </form>
      <MoviesList movies={movies}/>
    </Box>
  )
};

export default Movies;