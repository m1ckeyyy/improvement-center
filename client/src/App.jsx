import React, { lazy, Suspense, useTransition } from "react";

const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Home = lazy(() => import("./pages/Home/Home"));
const Tools = lazy(() => import("./pages/Tools/Tools"));

import { Route, Routes } from "react-router-dom";

import "./App.css";
import SuspenseRouter from "./SuspenseRouter";

// on launch hacker animation every 7s

function App() {
  //   const [isPending, startTransition] = useTransition();
  return (
    <>
      <SuspenseRouter window={window}>
        <Suspense fallback={<div>Loading...</div>}>
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
