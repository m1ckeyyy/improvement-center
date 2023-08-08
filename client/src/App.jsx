import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingScreen } from './pages/effects/LoadingScreen';
import { Login, Register, Home, Pomodoro, Journal } from './lazyLoadedPages';
import SuspenseRouter from './SuspenseRouter';

const App = () => {
  return (
    <SuspenseRouter window={window}>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
        </Routes>
      </Suspense>
    </SuspenseRouter>
  );
};

export default App;
