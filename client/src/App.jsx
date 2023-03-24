import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About"));
const Login = lazy(() => import("./pages/Login/Login"));
const Register = lazy(() => import("./pages/Register/Register"));
const Home = lazy(() => import("./pages/Home/Home"));
const Tools = lazy(() => import("./pages/Tools/Tools"));

import { Route, Routes } from "react-router-dom";

import "./App.css";
// on launch hacker animation every 7s
function App() {
	return (
		<>
			{/* <Navbar /> */}
			<Suspense fallback={<h1>wait</h1>}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/tools" element={<Tools />} />
				</Routes>
			</Suspense>
		</>
	);
}

export default App;
