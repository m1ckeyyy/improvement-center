import { useEffect } from 'react';
import { useSounds } from '../Sounds/sounds';

export const useSelectMusic = ({ selectedMusicOption }) => {
  const { rainSound, brownNoise } = useSounds();
  useEffect(() => {
    switch (selectedMusicOption) {
      case 'Rain':
        rainSound.play();
        rainSound.loop = true;
        brownNoise.pause();
        break;
      case 'OFF':
        rainSound.pause();
        brownNoise.pause();
        break;
      case 'Brown Noise':
        brownNoise.play();
        brownNoise.loop = true;
        rainSound.pause();
        break;
    }
  }, [selectedMusicOption]);
};
