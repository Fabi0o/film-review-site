import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Register = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const registerUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/createUser", {
      email: email,
      password: password,
      name: name,
      status: "active",
    })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form className="container" onSubmit={registerUser}>
      <Form.Group className="mb-3" controlId="Email">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="Enter username"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign-up
      </Button>
    </Form>
  );
};

export default Register;
