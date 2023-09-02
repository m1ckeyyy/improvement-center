import React, { useContext } from 'react';
import { BiVolumeMute, BiVolumeFull } from 'react-icons/bi';
import { TimerContext } from './timerLogic/TimerContext';

export const VolumeIcon = () => {
  const { alarmSound }: { alarmSound: 'ON' | 'OFF' } = useContext(TimerContext);

  const volumeIconStyle: object = {
    color: '#e3e3e34d',
    position: 'absolute',
    bottom: '-3em',
    left: '2px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  };
  //prettier-ignore
  return <>
    {
    alarmSound === 'ON'
    ?
    <BiVolumeFull style={volumeIconStyle} size={'2em'} title="alarm sound on" />
    :
    <BiVolumeMute style={volumeIconStyle} size={'2em'} title="alarm sound off" />
    }
  </>;
};
