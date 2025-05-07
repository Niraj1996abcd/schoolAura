import React from "react";
import Slider from "react-slick";
import { Container, Card, Row, Col, Image } from "react-bootstrap";

// Sample testimonials data (replace with your real data)
const testimonials = [
  {
    name: "Rakesh Sharma",
    location: "Faridabad, Haryana",
    avatar:
      "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-3.png",
    text: "A parent who has a phobia for math would dread to see her child going through the same. I am glad we found School Aura, which gave a great teacher and a great platform for learning.",
  },
  {
    name: "Varun Kasyap",
    location: "Uttar Pradesh",
    avatar:
      "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-5.jpg",
    text: "School Aura Teachers make sure one understands the concept by giving everyday observations. Thank You!",
  },
  {
    name: "Vishal Kumar",
    location: "Delhi",
    avatar:
      "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user-6.jpg",
    text: "“My daughter used to despise math, but now she can confidently take math tests.” She's become enamoured with math, which is fantastic! Thank You School Aura for your tremendous support.",
  },
  {
    name: "Ravi Kaushal",
    location: "Indore, Madhya Pradesh",
    avatar:
      "https://www.schoolaura.com/Content/new_assets/images/tutor-solution-page/user2.jpg",
    text: "Excellent teacher with a fantastic teaching method; if I had had this teacher in school, I believe I would have achieved my goal of becoming a lecturer.",
  },
];

const sliderSettings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable auto sliding
  autoplaySpeed: 3500, // Slide every 3.5 seconds
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
  appendDots: (dots) => (
    <div style={{ marginTop: 20 }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: (i) => (
    <div
      style={{
        width: "30px",
        height: "4px",
        background: i === 0 ? "#e74c3c" : "#ccc",
        borderRadius: "2px",
      }}
    />
  ),
};

const TestimonialSlider = () => (
  <div style={{ background: "#f5f6fa", padding: "40px 0" }}>
    <Container>
      <h2
        className="text-center mb-5"
        style={{ fontWeight: 700, letterSpacing: 1 }}
      >
        WHAT <span style={{ color: "#e74c3c" }}>PARENT SAYS</span>
      </h2>
      <Slider {...sliderSettings}>
        {testimonials.map((t, idx) => (
          <div key={idx}>
            <Card
              style={{
                margin: "0 10px",
                borderRadius: 16,
                minHeight: 220,
                boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                border: "none",
              }}
            >
              <Card.Body>
                <Row className="align-items-center mb-2">
                  <Col xs="auto">
                    <Image
                      src={t.avatar}
                      roundedCircle
                      width={45}
                      height={45}
                      alt={t.name}
                    />
                  </Col>
                  <Col>
                    <div style={{ fontWeight: 600 }}>{t.name}</div>
                    <div style={{ color: "#e74c3c", fontSize: 13 }}>
                      {t.location}
                    </div>
                  </Col>
                </Row>
                <div style={{ color: "#333", fontSize: 15, lineHeight: 1.5 }}>
                  {t.text}
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  </div>
);

export default TestimonialSlider;
