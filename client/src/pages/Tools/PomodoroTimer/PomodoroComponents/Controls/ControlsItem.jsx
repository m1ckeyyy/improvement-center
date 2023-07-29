import { createElement } from 'react';

// import React,createElement from "react";
export const ControlsItem = ({ name, iconSrc, onClick }) => {
  return (
    <span onClick={onClick}>
      {createElement(iconSrc, { color: '#0a789b', size: '3em', cursor: 'pointer', title: `${name}` })}
      <p>{name}</p>
    </span>
  );
};

/*
<span onClick={handleStartStop}>
  <AiOutlinePauseCircle color="#0a789b" size="3em" cursor="pointer" title="pause" />
  <p>Pause</p>
</span>;

<span onClick={handleStartStop}>
  <AiOutlinePlayCircle color="#0a789b" size="3em" cursor="pointer" title="play" />
  <p>Play</p>
</span>;

<span onClick={handleReset}>
  <MdAlarmOff color="#0a789b" size="3em" cursor="pointer" title="reset" />
  <p>Reset</p>
</span>;

<span onClick={handleSkipSection}>
  <BsSkipForward color="#0a789b" size="3em" cursor="pointer" title="skip section" />
  <p>Skip</p>
</span>;

what do they have in common
1. span & p
2. same styling for icon
3. has onClick

different:
1. onClick link
2. iconName
3. title


props:
1. handleWhat
2. icon
*/
