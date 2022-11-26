import { useLocation, useParams, Outlet, Link } from "react-router-dom";
import { getMovieById } from "services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetails = () => {
  const { movieId } = useParams();
  
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  }
  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <button type='button' onClick={handleGoBack}>Go back</button>
      <div>
        <h2>{movie.title}</h2>
        <img src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        <p>Overview: { movie.overview }</p>
      </div>
      <Link to='cast' state={location.state}>Cast</Link>
      <Link to='reviews' state={location.state}>Reviews</Link>
      <Outlet />
    </>
  )
};