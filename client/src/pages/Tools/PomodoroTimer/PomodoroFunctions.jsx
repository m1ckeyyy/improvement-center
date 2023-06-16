import { useState, useEffect } from "react";

export function usePomodoroTimer() {
  const [timePassed, setTimePassed] = useState(
    JSON.parse(localStorage.getItem("timePassed")) || 0
  );
  const [workMode, setWorkMode] = useState(
    JSON.parse(localStorage.getItem("workMode")) || true
  );
  const [workTime, setWorkTime] = useState(
    JSON.parse(localStorage.getItem("workTime")) || 25
  );
  const [breakTime, setBreakTime] = useState(
    JSON.parse(localStorage.getItem("breakTime")) || 5
  );
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || "default"
  );
  const [music, setMusic] = useState(
    JSON.parse(localStorage.getItem("music")) || "on"
  );

  const resetAllSettings = () => {
    localStorage.removeItem("timerState");
  };

  const handlePageRefresh = () => {
    localStorage.setItem("startTime", JSON.stringify(startTime));
    localStorage.setItem("timePassed", JSON.stringify(timePassed));
    localStorage.setItem("workMode", JSON.stringify(workMode));
    localStorage.setItem("workTime", JSON.stringify(workTime));
    localStorage.setItem("breakTime", JSON.stringify(breakTime));
    localStorage.setItem("theme", JSON.stringify(theme));
    localStorage.setItem("music", JSON.stringify(music));
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handlePageRefresh);

    return () => {
      window.removeEventListener("beforeunload", handlePageRefresh);
    };
  }, [timePassed, workMode, workTime, breakTime, theme, music]);

  return {
    timePassed,
    setTimePassed,
    workMode,
    setWorkMode,
    workTime,
    setWorkTime,
    breakTime,
    setBreakTime,
    theme,
    setTheme,
    music,
    setMusic,
  };
}
