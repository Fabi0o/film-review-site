import Card from "react-bootstrap/Card";
const ReviewPrev = (props) => {
  return (
    <Card className="col-sm-8 m-auto">
      <Card.Body>
        <Card.Title>{props.review.reviewtitle}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          By {props.review.author}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          '{props.review.title}'
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Category: {props.review.category}
        </Card.Subtitle>
        <Card.Text className="text-justify">{props.review.body}</Card.Text>
        <Card.Link href="#">Read more!</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ReviewPrev;
