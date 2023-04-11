import React, { lazy, Suspense, useTransition } from "react";
import LoadingScreen from "./pages/effects/LoadingScreen";

const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Home = lazy(() => import("./pages/Home/Home"));
const Tools = lazy(() => import("./pages/Tools/Tools"));
// const Navbar = lazy(() => import("./pages/Navbar/Navbar"));

import { Route, Routes } from "react-router-dom";

import "./App.css";
import SuspenseRouter from "./SuspenseRouter";

function App() {
  return (
    <>
      <SuspenseRouter window={window}>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tools" element={<Tools />} />
          </Routes>
        </Suspense>
      </SuspenseRouter>
    </>
  );
}

export default App;
