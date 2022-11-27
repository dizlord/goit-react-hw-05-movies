import { useLocation, useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'services/api';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from 'services/Box';
import { Genre, Image, NavItemMovies, OverviewTitle } from './MovieDetails.styled';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };
  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <Box padding={4}>
      <button type="button" onClick={handleGoBack}>
        Go back
      </button>
      <Box paddingY={3} display='grid' gridTemplateColumns='200px 1fr' borderBottom='2px solid green'>
        <Image src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <Box marginLeft={4} height='100%'>
          <h2>{movie.title} ({new Date(movie.release_date).getFullYear()})</h2>
          <OverviewTitle>Overview:</OverviewTitle>
          <p>{movie.overview}</p>
          <OverviewTitle>Genres:</OverviewTitle>
          <p>{movie.genres.map((genre) => {
            return (<Genre key={genre.id}>{genre.name}</Genre>)
          }) }</p>
        </Box>
      </Box>
      <Box marginTop='20px'>
        <h2>Additional information</h2>
        <NavItemMovies to="cast" state={location.state}>
          Cast
        </NavItemMovies>
        <NavItemMovies to="reviews" state={location.state}>
          Reviews
        </NavItemMovies>
      </Box>
      <Outlet />
    </Box>
  );
};

export default MovieDetails;