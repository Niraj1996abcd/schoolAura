import React, { useState } from "react";
import "../Styles/headersection.css";
import { ChevronRight, Eye, EyeOff } from "lucide-react";
const Header = () => {
  const data = {
    School: [
      { name: "11th Class", count: "182+" },
      { name: "12th Class", count: "178+" },
      { name: "6th Class", count: "151+" },
      { name: "7th Class", count: "150+" },
      { name: "10th Class", count: "150+" },
      { name: "9th Class", count: "141+" },
      { name: "8th Class", count: "135+" },
      { name: "5th Class", count: "87+" },
    ],
    Competitive: [
      { name: "JEE Main", count: "95%" },
      { name: "NEET", count: "90%" },
      { name: "Olympiad", count: "85%" },
    ],
    Enterance: [
      { name: "IIT Entrance", count: "70%" },
      { name: "Medical Entrance", count: "80%" },
    ],
    Tutors: [
      { name: "Math Tutor", count: "Available" },
      { name: "Science Tutor", count: "Available" },
    ],
  };
  const [activeTab, setActiveTab] = useState("School");
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [loginType, setLoginType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const getPlaceholder = () => {
    return loginType === "student"
      ? { user: "Student Mobile or Key", pass: "Student Password" }
      : { user: "Parent Mobile or Email", pass: "Parent Password" };
  };

  const { user, pass } = getPlaceholder();
  return (
    <div>
      <div className="top-bar">
        <div className="top-bar-left">
          📞 +91-9540349392 &nbsp; ✉️ contact@schoolaura.com
        </div>
        <div className="top-bar-right">
          <button className="top-bar-button">
            {/* <img src="/icons/whatsapp.png" alt="WhatsApp" className="icon" /> */}
            WhatsApp
          </button>
          <button className="top-bar-button">
            {/* <img src="/icons/whatsapp.png" alt="WhatsApp" className="icon" /> */}
            Mobile App
          </button>
          <button className="top-bar-button">
            {/* <img
              src="/icons/mobile-app.png"
              alt="Mobile App"
              className="icon"
            /> */}
            Login
          </button>
          <button className="top-bar-button">
            {/* <img
              src="/icons/mobile-app.png"
              alt="Mobile App"
              className="icon"
            /> */}
            Register
          </button>
        </div>
      </div>

      <div className="navbar" style={{ padding: "0.2rem 1.5rem" }}>
        <div className="brand">SCHOOL AURA</div>

        <div
          className="hamburger"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          &#9776; {/* Unicode for hamburger icon */}
        </div>

        <ul className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Exam Solution</a>
          </li>
          <li>
            <a href="#">Online Study</a>
          </li>
          <li>
            <a href="#">Tutor Solution</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">School Management</a>
          </li>
        </ul>
      </div>

      <div
        className="container-fluid bg-danger p-0"
        style={{ minHeight: "500px", position: "relative", overflow: "hidden" }}
      >
        {/* Main Hero Content */}
        <div className="row mx-0 py-5" data-aos="zoom-in-up">
          {/* Left section with heading and cards */}
          <div className="col-lg-9 position-relative">
            {/* Cartoon Student Image */}

            {/* Hero Text */}
            <div>
              <h1 className="display-4 fw-bold text-white mb-1">
                BE A <span className="text-dark">SMART STUDENT</span>
              </h1>
              <p className="text-white fs-4 mb-4">
                SchoolAura Is A Smart Education Platform
              </p>

              {/* Card Grid */}
              <div className="row g-3">
                <div className="col-sm-6 col-lg-3">
                  <Card title="ENTERANCE" subtitle="Solution" />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <Card title="COMPETITIVE" subtitle="Solution" />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <Card title="KG - 12TH" subtitle="SCHOOL" superscript="TH" />
                </div>
                <div className="col-sm-6 col-lg-3">
                  <Card
                    title="TUTOR"
                    subtitle="SOLUTION"
                    hasFindTutors={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right section with login form */}
          <div className="col-lg-3 mt-5 mt-lg-0">
            <div className="bg-white rounded shadow p-4 position-relative">
              {/* Profile Icon */}
              <div className="position-absolute top-0 start-50 translate-middle">
                <div
                  className="rounded-circle bg-danger d-flex align-items-center justify-content-center p-1"
                  style={{ width: "90px", height: "90px" }}
                >
                  <div
                    className="bg-white rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      src="https://www.schoolaura.com/Content/new_assets/images/header/user-img.png"
                      alt="Student profile"
                      className="rounded-circle"
                    />
                  </div>
                </div>
              </div>

              {/* Login Tabs */}
              <div className="d-flex mt-5 mb-3 bg-light rounded">
                <button
                  className={`flex-grow-1 border-0 py-2 ${
                    loginType === "student"
                      ? "bg-danger text-white"
                      : "bg-light text-secondary"
                  }`}
                  onClick={() => setLoginType("student")}
                >
                  Student Login
                </button>
                <button
                  className={`flex-grow-1 border-0 py-2 ${
                    loginType === "parent"
                      ? "bg-danger text-white"
                      : "bg-light text-secondary"
                  }`}
                  onClick={() => setLoginType("parent")}
                >
                  Parents Login
                </button>
              </div>

              {/* Login Form */}
              <div className="mt-3">
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder={user}
                    className="form-control"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder={pass}
                    className="form-control"
                  />
                  <button
                    className="btn btn-link position-absolute end-0 top-0 text-secondary"
                    style={{ padding: "0.375rem 0.75rem" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                        <line x1="1" y1="1" x2="23" y2="23" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    )}
                  </button>
                </div>
                <button className="btn btn-dark w-100 py-2 mb-3">Login</button>
                <div className="d-flex justify-content-between fs-6 mt-2">
                  <a href="#" className="text-secondary text-decoration-none">
                    Forgot Password
                  </a>
                  <a href="#" className="text-secondary text-decoration-none">
                    Create Account
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------ */}
      <div className="why-study-section fade-in-up" data-aos="fade-up">
        <div className="study-content">
          <div className="study-left" data-aos="fade-right">
            <div className="black-box tilted-box">
              <ul>
                <li>- 256 Courses</li>
                <li>- Expert Teachers</li>
                <li>- Online Education</li>
              </ul>
            </div>
          </div>

          <div className="study-right" data-aos="fade-left">
            <h2>Why Online Study With SchoolAura</h2>
            <p>
              The world is changing for the better. Because of the advancement
              of technology, geek minds have grown tired of doing more work, and
              carrying books, notebooks and how much to buy books?
            </p>
            <p>
              <strong>Solution:</strong> Now you can find a simple solution with
              SchoolAura. In these days almost everyone has a Smartphone, Tab or
              Laptop. So just open your device and start your study from
              anywhere anytime while you are travelling, sitting in the park,
              and etc.
            </p>
            <p>
              Now use your time and gain knowledge in every second and use your
              device for right things not for waste your time.
            </p>
          </div>
        </div>

        <div className="students-image-row" data-aos="zoom-in-up">
          <img
            src="https://www.schoolaura.com/Content/new_assets/images/banner-2/Layer-20.png"
            alt="Students"
          />
        </div>
      </div>

      {/* ------ */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4">
          PROVIDE <span className="text-danger">BEST EDUCATIONAL</span>
        </h2>
        <div
          className="row shadow"
          style={{ background: "#f9f9f9" }}
          data-aos="fade-up"
        >
          {/* Left Sidebar */}
          <div className="col-md-3 p-0 border-end">
            {Object.keys(data).map((category) => (
              <div
                key={category}
                className={`py-3 px-4 border-bottom cursor-pointer ${
                  activeTab === category ? "active-tab" : ""
                }`}
                onClick={() => setActiveTab(category)}
                style={{
                  cursor: "pointer",
                  backgroundColor:
                    activeTab === category ? "#ffffff" : "#f0f0f0",
                }}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="col-md-9 p-4">
            <div className="row">
              {data[activeTab].map((item, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-6 mb-4"
                  data-aos="fade-up"
                >
                  <div className="d-flex align-items-center shadow-sm p-3 bg-white h-100">
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        backgroundColor: "#000",
                        color: "#fff",
                        fontSize: "1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                      }}
                    >
                      N
                    </div>
                    <div>
                      <h6 className="text-danger mb-1">{item.name}</h6>
                      <small className="text-muted">{item.count}</small>
                    </div>
                  </div>
                </div>
              ))}
              {data[activeTab].length === 0 && (
                <p className="text-muted">No data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// Card Component
function Card({ title, subtitle, superscript, hasFindTutors }) {
  return (
    <div className="bg-white rounded p-3 text-center shadow-sm h-100">
      <h4 className="text-secondary fw-medium mb-3">
        {title}
        {superscript && <sup className="small">{superscript}</sup>}
        {subtitle && <span> {subtitle}</span>}
      </h4>

      {hasFindTutors ? (
        <>
          <button className="btn btn-danger w-100 mb-2">Find Tutors</button>
          <button className="btn btn-danger w-100 mb-2">Become Tutor</button>
        </>
      ) : (
        <>
          <button className="btn btn-danger w-100 mb-2">Exam</button>
          <button className="btn btn-danger w-100 mb-2">Courses</button>
        </>
      )}

      <div className="d-flex justify-content-center align-items-center text-danger small fw-medium mt-2">
        <span>READ MORE</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ms-1"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </div>
  );
}
