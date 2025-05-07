import React from "react";
import { Container, Row, Col } from "react-bootstrap";

// Replace with your actual image URL
const spreadingImage =
  "https://www.schoolaura.com/Content/new_assets/images/happy-clients/client.png";

const stats = [
  { icon: "🎓", number: "108+", label: "Happy School" },
  { icon: "👨‍🎓", number: "58030+", label: "Students" },
  { icon: "👨‍👩‍👧‍👦", number: "5360+", label: "Happy Parents" },
  { icon: "👨‍🏫", number: "10+", label: "Happy Tutors" },
];

const SpreadingSection = () => (
  <Container fluid className="py-5" style={{ backgroundColor: "#f5f6fa" }}>
    <Row className="align-items-center">
      <Col md={5} className="text-center">
        <img
          src={spreadingImage}
          alt="We are spreading"
          className="img-fluid"
          style={{
            maxHeight: 320,
            borderRadius: 10,
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}
        />
      </Col>
      <Col md={7}>
        <h4 style={{ fontWeight: 600, letterSpacing: 1 }}>WE</h4>
        <h3 style={{ fontWeight: 700, color: "#e74c3c" }}>ARE SPREADING</h3>
        <hr style={{ width: 80, borderTop: "2px solid #ccc", marginLeft: 0 }} />
        <Row className="mt-4">
          <Col md={6} className="mb-4">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", marginRight: 15 }}>🎓</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>108+</div>
                <div style={{ color: "#e74c3c" }}>Happy School</div>
              </div>
            </div>
          </Col>
          <Col md={6} className="mb-4">
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", marginRight: 15 }}>👨‍🎓</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                  58030+
                </div>
                <div style={{ color: "#e74c3c" }}>Students</div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", marginRight: 15 }}>👨‍👩‍👧‍👦</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>5360+</div>
                <div style={{ color: "#e74c3c" }}>Happy Parents</div>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ fontSize: "2rem", marginRight: 15 }}>👨‍🏫</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>10+</div>
                <div style={{ color: "#e74c3c" }}>Happy Tutors</div>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
);

export default SpreadingSection;
