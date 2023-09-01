import React, { createElement } from 'react';
import { IconType } from 'react-icons/lib';

type ItemsProps = {
  name: string;
  iconSrc: IconType;
  onClick: () => void;
};

export const ControlsItem = ({ name, iconSrc, onClick }: ItemsProps) => {
  return (
    <span onClick={onClick}>
      {createElement(iconSrc, { color: '#0a789b', size: '3em', cursor: 'pointer', title: `${name}` })}
      <p>{name}</p>
    </span>
  );
};
