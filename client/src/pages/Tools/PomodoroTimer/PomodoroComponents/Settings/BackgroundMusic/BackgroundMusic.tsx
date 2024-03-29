import React from 'react';
import styles from './BackgroundMusic.module.scss';
import { useContext } from 'react';
import { TimerContext } from '../../timerLogic/TimerContext';

type MusicProps = {
  isMusicMenuOpen: boolean;
  setIsMusicMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BackgroundMusicOptions = ({ isMusicMenuOpen, setIsMusicMenuOpen }: MusicProps) => {
  const { selectedMusicOption, setSelectedMusicOption } = useContext(TimerContext);

  const toggleDropdown = () => {
    setIsMusicMenuOpen((prevState) => !prevState);
  };

  const selectOption = (option: 'OFF' | 'Brown Noise' | 'Rain') => {
    setSelectedMusicOption(option);
    setIsMusicMenuOpen(false);
  };

  return (
    <div className={styles.backgroundMusicOptions}>
      <div className={styles.selectedMusicOption} onClick={toggleDropdown}>
        {selectedMusicOption}
      </div>
      {isMusicMenuOpen && (
        <ul className={styles.dropdownMenu}>
          <li className={` ${selectedMusicOption === 'Brown Noise' ? styles.selected : ''}`} onClick={() => selectOption('Brown Noise')}>
            Brown Noise
          </li>
          <li className={` ${selectedMusicOption === 'Rain' ? styles.selected : ''}`} onClick={() => selectOption('Rain')}>
            Rain
          </li>
          <li className={` ${selectedMusicOption === 'OFF' ? styles.selected : ''}`} onClick={() => selectOption('OFF')}>
            OFF
          </li>
        </ul>
      )}
    </div>
  );
};
