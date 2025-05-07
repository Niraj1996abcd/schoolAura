import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      {/* Newsletter */}
      <div className="bg-light text-center py-4">
        <h4 className="fw-bold mb-3">
          SUBSCRIBE OUR <span className="text-danger">NEWSLETTER</span>
        </h4>
        <form className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control w-25 rounded-0"
            placeholder="Email Address"
          />
          <button className="btn btn-danger rounded-0">Subscribe</button>
        </form>
      </div>

      {/* Main Footer Content */}
      <div className="container py-5 border-top border-secondary">
        <div className="row">
          {/* About */}
          <div className="col-md-3">
            <h5 className="text-danger">About US</h5>
            <p className="small">
              SchoolAura Smart Education Platform is a step towards making
              learning better and effective for the students and help to
              achieving their goals.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3">
            <h5 className="text-danger">Quick Links</h5>
            <ul className="list-unstyled small">
              <li>› About Us</li>
              <li>› Benefits</li>
              <li>› Blogs</li>
              <li>› Testimonials</li>
              <li>› Features</li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="col-md-3">
            <h5 className="text-danger">Help & Support</h5>
            <ul className="list-unstyled small">
              <li>› Services</li>
              <li>› Support</li>
              <li>› Terms & condition</li>
              <li>› Privacy Policy</li>
              <li>› Sitemap</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3">
            <h5 className="text-danger">Follow Us</h5>
            <div className="d-flex gap-2 mt-2">
              <a href="#" className="text-light bg-primary p-2 rounded-circle">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light bg-danger p-2 rounded-circle">
                <FaInstagram />
              </a>
              <a href="#" className="text-light bg-info p-2 rounded-circle">
                <FaTwitter />
              </a>
              <a href="#" className="text-light bg-success p-2 rounded-circle">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-secondary my-4" />

        {/* Contact Info */}
        <div className="row text-center small">
          <div className="col-md-4 mb-3">
            <FaPhoneAlt className="me-2 fs-5 text-light" />
            <strong className="text-warning">CaLL US</strong>
            <br />
            <a
              href="tel:+919540349392"
              className="text-info text-decoration-none"
            >
              +91-9540349392
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <FaEnvelope className="me-2 fs-5 text-light" />
            <strong className="text-warning">MAIL US</strong>
            <br />
            <a
              href="mailto:contact@schoolaura.com"
              className="text-info text-decoration-none"
            >
              contact@schoolaura.com
            </a>
          </div>
          <div className="col-md-4 mb-3">
            <FaMapMarkerAlt className="me-2 fs-5 text-light" />
            <strong className="text-warning">Office Address</strong>
            <br />
            <span className="d-block text-white">
              E 44/3, Pocket D, Okhla Phase II, <br />
              Okhla Industrial Area, New Delhi, Delhi 110020, India
            </span>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="d-flex justify-content-between pt-3 border-top border-secondary small text-secondary">
          <span>2021 © SchoolAura. All Right Reserved</span>
          <span>
            Design & Development by{" "}
            <span className="text-info">Insoftlink Software</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
