import React from 'react';

type InputProps = {
  defaultValue: number;
  id: 'breakTimeInput' | 'workTimeInput';
  min: number;
  max: number;
};

export const TimePreferenceInput = React.memo(({ defaultValue, id, min, max }: InputProps) => <input type="number" defaultValue={defaultValue} id={id} min={min} max={max} required />);
