import { createElement } from 'react';

export const ControlsItem = ({ name, iconSrc, onClick }) => {
  return (
    <span onClick={onClick}>
      {createElement(iconSrc, { color: '#0a789b', size: '3em', cursor: 'pointer', title: `${name}` })}
      <p>{name}</p>
    </span>
  );
};
