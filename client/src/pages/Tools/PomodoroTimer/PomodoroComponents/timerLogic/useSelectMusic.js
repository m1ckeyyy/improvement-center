import { useEffect } from 'react';
import { useSounds } from '../Sounds/sounds';

export const useSelectMusic = ({ selectedMusicOption, setBackgroundTheme }) => {
  const { rainSound, brownNoise } = useSounds();
  useEffect(() => {
    switch (selectedMusicOption) {
      case 'Rain':
        rainSound.play();
        rainSound.loop = true;
        brownNoise.pause();
        setBackgroundTheme('Rain');
        break;
      case 'OFF':
        rainSound.pause();
        brownNoise.pause();
        setBackgroundTheme('OFF');
        break;
      case 'Brown Noise':
        brownNoise.play();
        brownNoise.loop = true;
        rainSound.pause();
        setBackgroundTheme('Brown Noise');

        break;
    }
  }, [selectedMusicOption]);
};
