import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoadingScreen } from './pages/effects/LoadingScreen';

const Login = lazy(() => import('./pages/Login/Login'));
const Register = lazy(() => import('./pages/Register/Register'));
const Home = lazy(() => import('./pages/Home/Home'));
const Pomodoro = lazy(() => import('./pages/Tools/PomodoroTimer/PomodoroTimer'));

import './App.css';
import SuspenseRouter from './SuspenseRouter';

function App() {
  return (
    <>
      <SuspenseRouter window={window}>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/pomodoro" element={<Pomodoro />} />
          </Routes>
        </Suspense>
      </SuspenseRouter>
    </>
  );
}

export default App;
