import "../Styles/Landing-Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import Header from "../header";
import Footer from "../footer";

function Landing() {
  return (
    <div>
      <Header />
      <div className="hero-section">
        <div className="section"></div>
        <div className="section">
          <h1>Welcome</h1>
          <p>
            Dedicated to upholding academic integrity, this platform empowers
            you to effortlessly report missing grades, ensuring precision in
            your academic record. Embrace a commitment to transparency and
            accountability in education.
          </p>
          <a href="#features">
            <button>
              Find Out More <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </a>
        </div>
      </div>

      <div className="features" id="features">
        <h2>Features</h2>
        <p>
          A useful and easy to use tool for students to track their assignment
          grades and course averages.
        </p>
        <div className="feature-box">
          <div className="feature-container">
            <div className="feature f1">
              <FontAwesomeIcon icon={faUserGroup} className="icon" />
              <h3>User-Friendly Interface</h3>
              <p>Navigate effortlessly through the system.</p>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature f2">
              <FontAwesomeIcon icon={faCalculator} className="icon" />
              <h3>Auto Average Calculation</h3>
              <p>Automatically calculate your GPA.</p>
            </div>
          </div>
          <div className="feature-container">
            <div className="feature f3">
              <FontAwesomeIcon icon={faFileInvoice} className="icon" />
              <h3>Easy Reporting</h3>
              <p>Report missing grades in just a few clicks.</p>
            </div>
          </div>
        </div>
        <div className="how-it-works">
          <h2>How it works</h2>
          <p>Reporting missing grades is as easy as 3 steps</p>
          <ul>
            <li>
              <span></span>
              Log in to your GradeTrack account.
            </li>
            <li>
              <span></span>
              Select the course and submit a missing grade report.
            </li>
            <li>
              <span></span>
              Sit back and wait for the grade to be added
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
