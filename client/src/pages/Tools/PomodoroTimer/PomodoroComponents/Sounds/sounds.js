import { useRef } from 'react';
import endSoundFile from '/sounds/endSound.mp3';
import startSoundFile from '/sounds/startSound.mp3';
import brownNoiseFile from '/sounds/brownNoise.mp3';
import rainSoundFile from '/sounds/rainSound.mp3';

export const useSounds = () => {
  const startSound = useRef(new Audio(startSoundFile)).current;
  const endSound = useRef(new Audio(endSoundFile)).current;
  const rainSound = useRef(new Audio(rainSoundFile)).current;
  const brownNoise = useRef(new Audio(brownNoiseFile)).current;

  return { startSound, endSound, rainSound, brownNoise };
};
