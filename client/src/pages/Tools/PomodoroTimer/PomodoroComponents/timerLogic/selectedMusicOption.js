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
