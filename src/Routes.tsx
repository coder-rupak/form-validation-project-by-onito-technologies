import React from "react";
import { DashBoard } from "./pages/DashBoard";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  );
}

export default Router;
