import React, { useState } from "react";
import styles from "./BackgroundMusic.module.scss";

const BackgroundMusicOptions = ({ isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState("OFF");

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  console.log(selectedOption);
  return (
    <div className={styles.backgroundMusicOptions}>
      <div className={styles.selectedOption} onClick={toggleDropdown}>
        {selectedOption}
      </div>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          <li
            className={` ${
              selectedOption === "Brown Noise" ? styles.selected : ""
            }`}
            onClick={() => selectOption("Brown Noise")}
          >
            Brown Noise
          </li>
          <li
            className={` ${selectedOption === "Rain" ? styles.selected : ""}`}
            onClick={() => selectOption("Rain")}
          >
            Rain
          </li>
          <li
            className={` ${selectedOption === "OFF" ? styles.selected : ""}`}
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
