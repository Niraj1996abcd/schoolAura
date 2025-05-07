import React from "react";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
const Middle = () => {
  return (
    <>
      <Container fluid className="p-5 bg-light">
        <Row className="align-items-center">
          {/* Mobile App Mockup */}
          <Col md={4} className="text-center mb-4 mb-md-0">
            <Card
              style={{ width: "16rem", margin: "0 auto", borderRadius: "2rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <img
                    src="https://png.pngtree.com/png-clipart/20240925/original/pngtree-hand-holding-a-mobile-phone-png-image_16091163.png"
                    alt="School Aura"
                    style={{ width: 80 }}
                  />
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>Student Login</ListGroup.Item>
                  <ListGroup.Item>Parent Login</ListGroup.Item>
                  <ListGroup.Item>Staff Login</ListGroup.Item>
                  <ListGroup.Item>Admin Login</ListGroup.Item>
                  <ListGroup.Item>School Registration</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          {/* Description and Download */}
          <Col md={8}>
            <h2>
              Easy to Access with{" "}
              <span style={{ color: "#e74c3c" }}>Mobile APP</span>
            </h2>
            <p>
              If you're looking for easily accessible resources for your
              classroom, then you're in the right place. Online learning with
              the Android app is very easy to access. That's why we've
              hand-curated the School Aura free app and website. Easy to use and
              learn!
            </p>
            <p>
              To learn online, you need to be reasonably comfortable with Smart
              Mobile Phone, Tab, Laptops, and the internet. The advantage of
              learning online via an android app is that you can pause the
              video/audio whenever you need to take notes or simply absorb what
              has been said. Another fantastic feature of online learning is
              that you can re-listen to different parts as needed, which is
              something you can't do in a live lecture!
            </p>
            <Button variant="primary">Download Now</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Middle;
