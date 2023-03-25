import React from "react";
import { RiLoader2Line } from "react-icons/ri";

const LoadingScreen = () => {
  return (
    <div
      style={{
        background: "linear-gradient(338deg, #b4e4ff, #3e54ac)",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <RiLoader2Line
        size="10em"
        style={{
          color: "white",
          animation: "spin 1.5s linear infinite",
        }}
      />
      <style>
        {`
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
      </style>
    </div>
  );
};

export default LoadingScreen;
