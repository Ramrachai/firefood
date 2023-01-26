import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useState } from "react";
import Logo from "../assets/image/logo.jpg";
import { Button, Image } from "react-bootstrap";
import { useEffect } from "react";

function Navmenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container className={"d-flex justify-content-between"}>
        <Navbar.Brand as={Link} to={"/"}>
          <Image src={Logo} style={{ width: 50, mixBlendMode: "multiply" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link className="" as={Link} to="/">
              List
            </Nav.Link>

            {user && (
              <Nav.Link as={Link} to="/dashboard">
                Dashboard
              </Nav.Link>
            )}
          </Nav>

          <Nav>
            {!user ? (
              <Button variant="warning" as={Link} to="/login">
                Login
              </Button>
            ) : (
              <Button onClick={() => firebase.auth().signOut()}>Logout</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmenu;
