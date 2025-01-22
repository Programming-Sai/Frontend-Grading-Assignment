import React from "react";
import Landing from "./Pages/LandingPage";
import Header from "./header";
import Footer from "./footer";
import DashBoard from "./Pages/DashboardPage";
import Instructor from "./Pages/InstructorInfo";
import { Route, Routes, Navigate } from "react-router-dom";
import Support from "./Pages/HelpSupportPage";
import Report from "./Pages/ReportMissingGradePage";
import Grade from "./Pages/GradeReportPage";
import { BASE_PATH } from "../../BasePath";

function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={`${BASE_PATH}/`}
          element={<Navigate to={`${BASE_PATH}/login`} replace />}
        />
        <Route path={`${BASE_PATH}/`} element={<Landing />} />
        <Route path={`${BASE_PATH}/instructor`} element={<Instructor />} />
        <Route path={`${BASE_PATH}/dashboard`} element={<DashBoard />} />
        <Route path={`${BASE_PATH}/help-support`} element={<Support />} />
        <Route path={`${BASE_PATH}/report`} element={<Report />} />
        <Route path={`${BASE_PATH}/grades`} element={<Grade />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Main;
