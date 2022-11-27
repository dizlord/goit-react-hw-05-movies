import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "services/api";
import Box from "services/Box";
import { ReviewCard, AutorReview } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(setReviews);
  }, [movieId]);
  
  return (
    <div>
      {
        reviews.length > 0 ?
      <Box as='ul' marginTop={5}>
        {
          reviews.map(review => (
            <ReviewCard key={review.id}>
              <AutorReview>{review.author}</AutorReview>
              <p>{review.content}</p>
            </ReviewCard>
          ))
        }
          </Box>
          :
          <p>We don't have any reviews for that movie</p>
      }
    </div>
  )
};

export default Reviews;