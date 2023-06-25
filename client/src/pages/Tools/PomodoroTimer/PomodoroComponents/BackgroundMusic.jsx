import React, { useState } from "react";
import styles from "./BackgroundMusic.module.scss";

const BackgroundMusicOptions = ({ isOpen, setIsOpen,selectedMusicOption,setSelectedMusicOption }) => {

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectOption = (option) => {
    setSelectedMusicOption(option);
    setIsOpen(false);
  };
  console.log(selectedMusicOption);
  return (
    <div className={styles.backgroundMusicOptions}>
      <div className={styles.selectedMusicOption} onClick={toggleDropdown}>
        {selectedMusicOption}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li
            className={` ${
              selectedMusicOption === "Brown Noise" ? styles.selected : ""
            }`}
            onClick={() => selectOption("Brown Noise")}
          >
            Brown Noise
          </li>
          <li
            className={` ${
              selectedMusicOption === "Rain" ? styles.selected : ""
            }`}
            onClick={() => selectOption("Rain")}
          >
            Rain
          </li>
          <li
            className={` ${
              selectedMusicOption === "OFF" ? styles.selected : ""
            }`}
            onClick={() => selectOption("OFF")}
          >
            OFF
          </li>
        </ul>
      )}
    </div>
  );
};

export default BackgroundMusicOptions;
