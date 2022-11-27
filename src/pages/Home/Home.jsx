import { getTrendingMovies } from "services/api";
import { useState, useEffect } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
import Box from "services/Box";
import { TrendingTitle } from "./Home.styled";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies)
  },[]);

  return (
    <Box padding={4}>
      <TrendingTitle>Trending today</TrendingTitle>
      <MoviesList movies={movies} />
    </Box>
  );
}

export default Home;