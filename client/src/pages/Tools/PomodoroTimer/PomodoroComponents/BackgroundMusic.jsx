import React, { useState } from "react";

const BackgroundMusicOptions = ({ isOpen, setIsOpen }) => {
  const [selectedOption, setSelectedOption] = useState("OFF");

  const toggleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="background-music-options">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption}
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li onClick={() => selectOption("Brown Noise")}>Brown Noise</li>
          <li onClick={() => selectOption("Rain")}>Rain</li>
          <li onClick={() => selectOption("off")}>OFF</li>
        </ul>
      )}
    </div>
  );
};

export default BackgroundMusicOptions;
