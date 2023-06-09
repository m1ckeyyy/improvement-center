import React, { useEffect, useRef } from "react";
import styles from "./ProgressBar.module.scss";

export const ProgressBar = ({ progress }) => {
  const canvasRef = useRef(null);
  const spanRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const spanPercent = spanRef.current;
    const ctx = canvas.getContext("2d");

    const posX = canvas.width / 2;
    const posY = canvas.height / 2;
    // const fps = 1000 / 200;
    const onePercent = 360 / 100;
    const result = onePercent * progress;

    ctx.lineCap = "round";
    arcMove();

    function arcMove() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const percent = result / onePercent;

      spanPercent.innerHTML = percent.toFixed();

      ctx.beginPath();
      ctx.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + 360)
      );
      ctx.strokeStyle = "#b1b1b1";
      ctx.lineWidth = "10";
      ctx.stroke();

      ctx.beginPath();
      ctx.strokeStyle = "#3949AB";
      ctx.lineWidth = "10";
      ctx.arc(
        posX,
        posY,
        70,
        (Math.PI / 180) * 270,
        (Math.PI / 180) * (270 + result)
      );
      ctx.stroke();
    }
  }, [progress]);

  return (
    <div className={styles.canvasWrap}>
      <canvas ref={canvasRef} width="300" height="300"></canvas>
      <span ref={spanRef} className={styles.percent}></span>
    </div>
  );
};

// export default ProgressBar;
