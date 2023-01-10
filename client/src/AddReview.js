import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddReview = (props) => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [revbody, setRevbody] = useState("");
  const [reviewtitle, setReviewtitle] = useState("");
  const addReview = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/addreview", {
      author: props.currentAccount,
      rating: rating,
      title: title,
      category: category,
      revbody: revbody,
      reviewtitle: reviewtitle,
    })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form className="col-sm-8 m-auto" onSubmit={addReview}>
      <Form.Group className="mb-3" controlId="reviewTitle">
        <Form.Label>Review Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          onChange={(e) => {
            setReviewtitle(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pieceTitle">
        <Form.Label>Reviewed piece title</Form.Label>
        <Form.Control
          type="text"
          placeholder="title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Review category</Form.Label>
        <Form.Control
          type="text"
          placeholder="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>rating</Form.Label>
        <Form.Control
          type="number"
          max={5}
          min={0}
          placeholder="0-5"
          onChange={(e) => {
            setRating(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="review">
        <Form.Label>review</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          onChange={(e) => {
            setRevbody(e.target.value);
          }}
          required
        />
      </Form.Group>
      <Form.Group>
        <Button variant="primary" type="submit">
          Add Review
        </Button>
      </Form.Group>
    </Form>
  );
};

export default AddReview;
