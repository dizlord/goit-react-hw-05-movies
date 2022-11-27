import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import Box from "services/Box";
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box as='ul' marginTop={4}>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{from: location}}>{movie.title || movie.name}</Link>
        </li>
      ))}
  </Box>
  )
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
}

