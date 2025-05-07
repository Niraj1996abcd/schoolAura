import React, { useState } from "react";
import "../Styles/headersection.css";
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

        {/* <div className="btn-group">
          <a href="#">Login</a>
          <a href="#">Registration</a>
        </div> */}
      </div>

      <div className="hero fade-in-up">
        <div className="hero-left">
          <h1>BE A SMART STUDENT</h1>
          <p>SchoolAura Is A Smart Education Platform</p>

          <div className="card-grid">
            {["ENTRANCE", "COMPETITIVE", "KG - 12TH SCHOOL", "TUTOR"].map(
              (label, i) => (
                <div className="card" key={i}>
                  <h4>{label} Solution</h4>
                  <button>Exam</button>
                  <button>Courses</button>
                </div>
              )
            )}
          </div>
        </div>
        <div className="login-box">
          <div className="tabs">
            <button
              className={loginType === "student" ? "active" : ""}
              onClick={() => setLoginType("student")}
            >
              Student Login
            </button>
            <button
              className={loginType === "parent" ? "active" : ""}
              onClick={() => setLoginType("parent")}
            >
              Parents Login
            </button>
          </div>

          <input type="text" placeholder={user} />
          <input type="password" placeholder={pass} />
          <button>Login</button>
          <a href="#">Forgot Password</a>
          <a href="#">Create Account</a>
        </div>
        );
      </div>
      {/* ------------------ */}
      <div className="why-study-section fade-in-up" data-aos="fade-up">
        <div className="study-content">
          <div className="study-left" data-aos="fade-right">
            <div className="black-box">
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
              SchoolAura. In these days almost everyone has a smartphone, Tab or
              Laptop. So just open your device and start your study from
              anywhere anytime while you are travelling, sitting in the park,
              and <i>etc</i>.
            </p>
            <p>
              Now use your time and gain knowledge in every second and use your
              device for right things not for waste your time.
            </p>
          </div>
        </div>

        {/* Student Image Row */}
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
        <div className="row shadow" style={{ background: "#f9f9f9" }}>
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
