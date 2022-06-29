import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Fragment>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Navbar</Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/characters">
              <Nav.Link>Characters</Nav.Link>
            </LinkContainer>
            <LinkContainer to="comics">
              <Nav.Link>Comics</Nav.Link>
            </LinkContainer>

            <LinkContainer to="favorite-characters">
              <Nav.Link>Favorite Characters</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
