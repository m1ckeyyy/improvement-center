import styles from './../Journal.module.scss';
import { AiFillDelete } from 'react-icons/ai';
// import { BiEditAlt } from 'react-icons/bi';
import { MdColorLens } from 'react-icons/md';
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';
import { useState } from 'react';

export const EditWindow = ({ pinned, handleDelete, handlePin, handleChangeColor }) => {
  const [colorPickedVisible, setColorPickerVisible] = useState(false);
  return (
    <div className={`${styles.editWindow}`}>
      <button type="button" title="Pin" onClick={handlePin}>
        {pinned ? <BsPinAngleFill size="29" /> : <BsPinAngle size="29" />}
      </button>
      <button type="button" title="Delete" onClick={handleDelete}>
        <AiFillDelete size="30" />
      </button>
      <button type="button" title="Change color" onClick={handleChangeColor}>
        <MdColorLens size="33" />
      </button>
    </div>
  );
};
