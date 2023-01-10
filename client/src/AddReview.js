import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddReview = () => {
  return (
    <Form className="col-sm-8 m-auto">
      <Form.Group className="mb-3" controlId="reviewTitle">
        <Form.Label>Review Title</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="pieceTitle">
        <Form.Label>Reviewed piece title</Form.Label>
        <Form.Control type="text" placeholder="title" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Review category</Form.Label>
        <Form.Control type="text" placeholder="category" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="rating">
        <Form.Label>rating</Form.Label>
        <Form.Control type="number" max={5} min={0} placeholder="0-5" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="review">
        <Form.Label>review</Form.Label>
        <Form.Control as="textarea" rows={5} />
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
