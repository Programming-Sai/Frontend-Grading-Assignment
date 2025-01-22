import React from "react";
import Login from "./components/Pages/LoginPage.jsx";
import Main from "./components/MainPage.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { BASE_PATH } from "../BasePath.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={`${BASE_PATH}/login`} element={<Login />} />
        <Route path={`${BASE_PATH}/*`} element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
