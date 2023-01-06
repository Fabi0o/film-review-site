import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Login = () => {
  return (
    <Form className="container">
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required />
        <Form.Text>
          Don't have an account?<a href="/register">Sign-up!</a>
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
