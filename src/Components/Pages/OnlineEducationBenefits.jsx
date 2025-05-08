import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";

const benefits = [
  "Time and Location Flexibility",
  "Find Unlimited Course Category",
  "No Need to Carry Books",
  "Get Access in any mobile, Tab, Laptop with your credential",
  "Use your time when you are traveling, Outing and free time",
  "Exam Practice before exam",
];

function OnlineEducationBenefits() {
  return (
    <Container className="my-5">
      <Row className="align-items-center" data-aos="zoom-in-up">
        <Col md={7}>
          <h2>
            <b>Benefits of</b>
            <br />
            <span style={{ color: "#e74c3c" }}>
              <b>Online Education</b>
            </span>
          </h2>
          <hr />
          <p>
            Online Education increases engagement by adding a human element.
            Studying in the comfort of your own home is convenient, but there
            are various other advantages of online study. It's especially
            beneficial for students who aren't as self-sufficient or who are
            used to the traditional educational model of "teacher and class."
          </p>
          <ul>
            {benefits.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Col>
        <Col md={5} className="text-center">
          <img
            src="https://www.schoolaura.com/Content/new_assets/images/spreading/spreading.png"
            alt="Thumbs up"
            className="img-fluid"
            style={{ maxHeight: 350 }}
          />
        </Col>
      </Row>
      <Row className="mt-4" data-aos="zoom-in-up">
        <Col>
          <Card className="bg-dark text-white text-center">
            <Card.Body>
              <Row>
                <Col>
                  <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    10000+
                  </div>
                  <div style={{ color: "#ff5202" }}>Total Exams</div>
                </Col>
                <Col>
                  <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    600+
                  </div>
                  <div style={{ color: "#ff5202" }}>Courses</div>
                </Col>
                <Col>
                  <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    3000+
                  </div>
                  <div style={{ color: "#ff5202" }}>Success Stories</div>
                </Col>
                <Col>
                  <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    4.5/5
                  </div>
                  <div style={{ color: "#ff5202" }}>Rating</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default OnlineEducationBenefits;
