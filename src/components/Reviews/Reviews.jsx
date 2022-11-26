import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);
  
  return (
    <div>
      <ul>
        {
          reviews.map(review => (
            <li key={review.created_at}>{ review.author }</li>
          ))
        }
      </ul>
    </div>
  )
};