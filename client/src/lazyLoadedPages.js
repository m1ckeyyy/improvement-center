import { lazy } from 'react';

export const Login = lazy(() => import('./pages/Login/Login.jsx'));
export const Register = lazy(() => import('./pages/Register/Register'));
export const Home = lazy(() => import('./pages/Home/Home'));
export const Pomodoro = lazy(() => import('./pages/Tools/PomodoroTimer/PomodoroTimer'));
export const Journal = lazy(() => import('./pages/Tools/Journal/Journal'));
