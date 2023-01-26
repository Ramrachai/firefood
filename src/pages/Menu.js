import React, { useEffect, useState } from "react";
import {
  Table,
  Card,
  Image,
  Button,
  Spinner,
  Container,
  Row,
  Col,
  Accordion,
  Badge,
  Stack,
  ListGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Logopic from "../assets/image/logo.jpg";

import FirestoreService from "../utils/services/FirestoreService";

function Menu(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    FirestoreService.getAllMenuItems()
      .then((response) => {
        setIsLoading(false);
        setMenuItems(response._delegate._snapshot.docChanges);
      })
      .catch((e) => {
        setIsLoading(false);
        alert("Error occured while fetching the menu item. " + e);
      });
  }, []);

  return (
    <>
      {isLoading === true && <Spinner animation="border" variant="secondary" />}
      <Container>
        <Row>
          <Col md={8} sm={12}>
            <Card style={{ margin: 24 }}>
              <Card.Header className="">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ marginRight: 8 }}
                >
                  <Image
                    src={Logopic}
                    style={{ width: 50, mixBlendMode: "multiply" }}
                  />
                  <span>
                    <h2 className="text-center">Food List</h2>
                    <p style={{ marginTop: 8, fontSize: 12, color: "#777" }}>
                      An authorized <b>Admin</b> can Add new item, Update or
                      delete existing food items.
                    </p>
                  </span>

                  <Button
                    as={Link}
                    to="/dashboard"
                    style={{ backgroundColor: "purple", borderWidth: 0 }}
                  >
                    Dashboard
                  </Button>
                </div>
              </Card.Header>
              <Card.Body>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Item Name</th>
                      <th>Category</th>
                      <th>Price (USD)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {menuItems &&
                      menuItems.map((menuItem, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>
                            {
                              menuItem.doc.data.value.mapValue.fields.itemName
                                .stringValue
                            }
                          </td>
                          <td>
                            {
                              menuItem.doc.data.value.mapValue.fields
                                .itemCategory.stringValue
                            }
                          </td>
                          <td>
                            {menuItem.doc.data.value.mapValue.fields.itemPrice
                              .doubleValue
                              ? menuItem.doc.data.value.mapValue.fields
                                  .itemPrice.doubleValue
                              : menuItem.doc.data.value.mapValue.fields
                                  .itemPrice.integerValue}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </Table>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-between align-items-center">
                <p style={{ marginTop: 8, fontSize: 12, color: "#A1A1A1" }}>
                  © 2022 Nandos
                </p>
                <p style={{ marginTop: 8, fontSize: 12, color: "#A1A1A1" }}>
                  <Link to="/login">Admin Login</Link> •{" "}
                  <Link to="/">Privacy Policy</Link> •{" "}
                  <Link to="/">Directions</Link> •{" "}
                  <Link to="/">Contact Us</Link>
                </p>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card bg="primary" text="light" style={{ margin: 24 }}>
              <Card.Header>About This App</Card.Header>
              <Card.Body>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Technology Used</Accordion.Header>
                    <Accordion.Body>
                      <Stack direction="" gap={2}>
                        <Badge bg="dark">Reactjs</Badge>
                        <Badge bg="dark">Firebase</Badge>
                        <Badge bg="dark">React-bootstrap</Badge>
                        <Badge bg="dark">React-router-dom</Badge>
                        <Badge bg="dark">Styled-components</Badge>
                        <Badge bg="dark">Create-react-app</Badge>
                        <Badge bg="dark">Cpanel hosting</Badge>
                        <Badge bg="dark">CI/CD using github actions</Badge>
                      </Stack>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Features</Accordion.Header>
                    <Accordion.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Food items Data are saved and retrieved from firestore
                          database
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Visitor can only view food list items.{" "}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Authenticated user (Admin) can View, Add, Edit and
                          Delete Food items. Firebase authentication is used.
                        </ListGroup.Item>
                        <ListGroup.Item>
                          User can login and logout
                        </ListGroup.Item>
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Menu;
