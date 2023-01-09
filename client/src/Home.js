import { useEffect } from "react";
import Axios from "axios";
import ReviewPrev from "./ReviewPrev";
const Home = (props) => {
  useEffect(() => {
    Axios.get("http://localhost:3001/reviews").then((res) => {
      props.setReviews(res.data);
    });
  }, []);
  return (
    <div>
      {props.reviews.map((review) => {
        return <ReviewPrev review={review} key={review.id} />;
      })}
    </div>
  );
};

export default Home;
