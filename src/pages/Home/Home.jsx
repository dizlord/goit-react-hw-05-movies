import { getTrendingMovies } from "services/api";
import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies)
  },[]);

  return <div>
    <MoviesList movies={ movies } /> 
  </div>;
}