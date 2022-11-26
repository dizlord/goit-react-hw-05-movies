import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getActors } from "services/api";

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getActors(movieId).then(setCast);
  }, [movieId]);
  
  return (
    <div>
      <ul>
        {
          cast.map(actor => (
            <li key={actor.id}>{ actor.name }</li>
          ))
        }
      </ul>
    </div>
  )
};