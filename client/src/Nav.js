import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Navi = (props) => {
  const logout = () => {
    props.setIsLoggedIn(false);
  };
  return (
    <Navbar bg="dark" variant="dark" className="mb-3">
      <Container>
        <Navbar.Brand href="/">ReviewSite</Navbar.Brand>
        <Nav>
          {props.isLoggedIn && (
            <Nav.Link href="/addreview">Add Review</Nav.Link>
          )}
          {props.isLoggedIn ? (
            <Nav.Link onClick={logout} href="/">
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link href="/login">Login</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navi;
