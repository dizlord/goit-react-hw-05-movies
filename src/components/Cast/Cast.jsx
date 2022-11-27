import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "services/api";
import Box from "services/Box";
import { ActorCard } from "./Cast.styled";

const baseUrl = 'https://image.tmdb.org/t/p/w500/';
const imgPlacehold = 'https://via.placeholder.com/150';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId).then(setCast);
  }, [movieId]);
  
  return (
    <div>
      {
        cast.length > 0 ?
        <Box as='ul' marginTop={5} display='grid' gridGap='10px' gridTemplateColumns='repeat(auto-fill, minmax(150px, 1fr))'>
          {
              cast.map(actor => (
                <ActorCard key={actor.id}>
                  <img src={`${actor.profile_path ? baseUrl + actor.profile_path : imgPlacehold + '?text=' + actor.name}`} width='100%' height='100%' alt={actor.name} />
                  <span>{actor.name}</span>
                </ActorCard>
              ))
          }
          </Box>
          : <p>We don't have any cast for that movie</p>
}
    </div>
  )
};

export default Cast;