import React, { useState } from "react";
import "../Styles/Login-Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook for navigation
import { BASE_PATH } from "../../../BasePath";

const Login = () => {
  const [studentId, setStudentId] = useState(""); // Use state for handling input values
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Dummy login function (replace with actual validation logic)
  const allowLogin = (e) => {
    e.preventDefault(); // Prevent default form submission

    let isOkToLogin = true; // Simulate a successful login. Replace with real validation.

    if (isOkToLogin) {
      // Store authentication token in localStorage
      localStorage.setItem("authToken", "some-auth-token");

      // Redirect to the dashboard or the main page after successful login
      navigate(`${BASE_PATH}/dashboard`);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <>
      <div className="all">
        <div className="body-part">
          <div className="login-box">
            <div className="box-item">
              <form>
                <h2> Login</h2>
                <div className="input-box">
                  <input
                    type="text"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)} // Handle input change
                    required
                    placeholder="StudentID"
                  />
                  <FontAwesomeIcon icon={faUser} className="login-icon" />
                </div>

                <div className="input-box">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Handle password change
                    required
                    placeholder="Password"
                  />
                  <FontAwesomeIcon icon={faLock} className="login-icon" />
                </div>
                <button onClick={allowLogin}>Login</button>
              </form>
            </div>

            <div className="box-item">
              <div className="last">
                <h2>GradeTrack</h2>
                <p>
                  A useful and easy to use tool for students to track their
                  assignment grades and course averages
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
