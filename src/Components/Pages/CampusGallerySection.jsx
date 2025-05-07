import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CampusGallerySection = () => (
  <div style={{ padding: "40px 0" }}>
    <Container>
      <Row className="align-items-center">
        {/* Video/Image Box */}
        <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
          <div
            style={{
              position: "relative",
              width: 400,
              height: 260,
              borderRadius: 8,
              overflow: "hidden",
              background: "#181c25",
              boxShadow: "0 2px 16px rgba(0,0,0,0.12)",
            }}
          >
            {/* Replace with your YouTube embed or image gallery if available */}
            <div
              style={{
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>
                Video unavailable
              </div>
              <div style={{ fontSize: 16, marginBottom: 10 }}>
                This video is no longer available because the YouTube account
                associated with this video has been terminated.
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  right: 16,
                  opacity: 0.6,
                }}
              >
                <svg width="32" height="22" viewBox="0 0 32 22" fill="none">
                  <rect width="32" height="22" rx="4" fill="#fff" />
                  <polygon points="12,7 22,11 12,15" fill="#181c25" />
                </svg>
              </div>
            </div>
          </div>
        </Col>
        {/* Text Content */}
        <Col md={6}>
          <div>
            <h2 style={{ fontWeight: 700, letterSpacing: 1 }}>
              VISIT OUR CAMPUS
              <br />
              WITH <span style={{ color: "#e74c3c" }}>IMAGE GALLERY</span>
            </h2>
            <hr
              style={{ width: 80, borderTop: "2px solid #ccc", marginLeft: 0 }}
            />
            <div style={{ color: "#555", margin: "18px 0", fontSize: 16 }}>
              Even slightly believable. If you are going use a passage of Lorem
              Ipsum need
            </div>
            <h3 style={{ fontWeight: 700, marginTop: 24 }}>
              OR WATCH WITH VIDEO
            </h3>
            <div className="d-flex align-items-center mt-3">
              <span
                style={{
                  display: "inline-block",
                  width: 0,
                  height: 0,
                  borderTop: "10px solid transparent",
                  borderBottom: "10px solid transparent",
                  borderLeft: "18px solid #e74c3c",
                  marginRight: 14,
                }}
              />
              <span
                style={{
                  color: "#e74c3c",
                  fontWeight: 600,
                  fontSize: 18,
                  cursor: "pointer",
                }}
              >
                PLAY NOW
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CampusGallerySection;
