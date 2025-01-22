import React from "react";
import "../Styles/Login-Page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { createBrowserHistory } from "history";
import { BASE_PATH } from "../../../BasePath";

const Login = () => {
  const history = createBrowserHistory();
  const allowLogin = () => {
    let isOkToLogin = true; // for the verification process
    if (isOkToLogin) {
      history.push(`${BASE_PATH}/`);
    } else {
      alert("ERROR");
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
                  <input type="text" required placeholder="StudentID" />
                  <FontAwesomeIcon icon={faUser} className="login-icon" />
                </div>

                <div className="input-box">
                  <input type="password" required placeholder="Password" />
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
