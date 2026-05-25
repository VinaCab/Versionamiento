import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";

import Clientes from "../pages/Clientes";

import Dashboard from "../pages/Dashboard";

import Reportes from "../pages/Reportes";

import Navbar from "../components/Navbar";

function AppRoutes() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/clientes" element={<Clientes />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/reportes" element={<Reportes />} />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;