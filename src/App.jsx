// import React from "react";
// import Login from "./components/Pages/LoginPage.jsx";
// import Main from "./components/ProtectedPages.jsx";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { BASE_PATH } from "../BasePath.js";
// import Landing from "./components/Pages/LandingPage.jsx";
// import Instructor from "./components/Pages/InstructorInfo.jsx";
// import Dashboard from "./components/Pages/DashboardPage.jsx";
// import Support from "./components/Pages/HelpSupportPage.jsx";
// import Report from "./components/Pages/ReportMissingGradePage.jsx";
// import Grade from "./components/Pages/GradeReportPage.jsx";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path={`${BASE_PATH}/login`} element={<Login />} />
//         <Route path={`${BASE_PATH}/`} element={<Landing />} />
//         <Route path={`${BASE_PATH}/instructor`} element={<Instructor />} />
//         <Route path={`${BASE_PATH}/dashboard`} element={<Dashboard />} />
//         <Route path={`${BASE_PATH}/help-support`} element={<Support />} />
//         <Route path={`${BASE_PATH}/report`} element={<Report />} />
//         <Route path={`${BASE_PATH}/grades`} element={<Grade />} />
//         <Route path={`${BASE_PATH}/*`} element={<Main />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import Login from "./components/Pages/LoginPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BASE_PATH } from "../BasePath.js";
import Landing from "./components/Pages/LandingPage.jsx";
import Instructor from "./components/Pages/InstructorInfo.jsx";
import Dashboard from "./components/Pages/DashboardPage.jsx";
import Support from "./components/Pages/HelpSupportPage.jsx";
import Report from "./components/Pages/ReportMissingGradePage.jsx";
import Grade from "./components/Pages/GradeReportPage.jsx";

import ProtectedRoute from "./components/ProtectedPages"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path={`${BASE_PATH}/login`} element={<Login />} />

        {/* Public Route */}
        <Route path={`${BASE_PATH}/`} element={<Landing />} />

        {/* Protected Routes */}
        <Route
          path={`${BASE_PATH}/instructor`}
          element={<ProtectedRoute element={<Instructor />} />}
        />
        <Route
          path={`${BASE_PATH}/dashboard`}
          element={<ProtectedRoute element={<Dashboard />} />}
        />
        <Route
          path={`${BASE_PATH}/help-support`}
          element={<ProtectedRoute element={<Support />} />}
        />
        <Route
          path={`${BASE_PATH}/report`}
          element={<ProtectedRoute element={<Report />} />}
        />
        <Route
          path={`${BASE_PATH}/grades`}
          element={<ProtectedRoute element={<Grade />} />}
        />

        {/* Catch-All Route */}
        {/* <Route path={`${BASE_PATH}/*`} element={<Main />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
