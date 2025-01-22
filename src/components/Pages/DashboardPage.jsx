import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Dashboard-Page.css";
import { useState } from "react";
import Header from "../header";
import Footer from "../footer";

function Dashboard() {
  const [buttonClick, setButtonClick] = useState(false);

  const handleButton = () => {
    setButtonClick(!buttonClick);
  };
  return (
    <>
      <Header />
      <div className="container-section">
        <div className="quick-info">
          <div className="info gpa">
            <h1 id="#gpa">3.5</h1>
            <p className="tell-gpa">GPA</p>Class
            <p></p>
          </div>
          <div className="info best">
            <h1>A</h1>
            <p>Best Grade</p>
            <p>Course: DCIT201</p>
          </div>
          <div className="info worst">
            <h1>F</h1>
            <p>Worst Grade</p>
            <p>Course: DCIT203</p>
          </div>
          <div className="info alert">
            <h1>0</h1>
            <p>Number of Missing Grades</p>
            <button onClick={handleButton}>
              <p>Alerts (2)</p>
              <FontAwesomeIcon icon={faBell} />
            </button>

            <div
              className={
                buttonClick ? "alert-list alert-list-open" : "alert-list"
              }
            >
              <button onClick={handleButton}>
                <FontAwesomeIcon icon={faClose} />
              </button>
              <div className="alert-content">
                <h3>Title</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Rerum officiis, ducimus dicta a voluptate nobis quos totam
                </p>
              </div>
              <div className="alert-content">
                <h3>Title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
                  ducimus quod quasi animi. Pariatur est doloremque cupiditate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="quick-info-detail">
          <h1>Overview</h1>
          <table border={0}>
            <tr>
              <th>Course List</th>
              <td>
                <p>
                  <span>DCIT201,</span> <span>DCIT203,</span>{" "}
                  <span>DCIT205,</span> <span>DCIT207,</span>{" "}
                  <span>CBAS210,</span> <span>MATH223</span>
                </p>
              </td>
            </tr>
            <tr>
              <th>CCP</th>
              <td>18</td>
            </tr>
            <tr>
              <th>Best Score</th>
              <td>79.99%</td>
            </tr>
            <tr>
              <th>Worst Score</th>
              <td>19.09%</td>
            </tr>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
