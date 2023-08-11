import styles from './../Journal.module.scss';
import { AiFillDelete } from 'react-icons/ai';
// import { BiEditAlt } from 'react-icons/bi';
import { MdColorLens } from 'react-icons/md';
import { BsPinAngleFill, BsPinAngle } from 'react-icons/bs';

export const EditWindow = ({ pinned, isEditTextMode, handleDelete, handlePin, handleEdit }) => {
  return (
    <div className={`${styles.editWindow}`}>
      <button type="button" title="Pin" onClick={handlePin}>
        {pinned ? <BsPinAngleFill size="29" /> : <BsPinAngle size="29" />}
      </button>
      <button type="button" title="Delete" onClick={handleDelete}>
        <AiFillDelete size="30" />
      </button>
      <button type="button" title="Change color">
        <MdColorLens size="33" />
      </button>
    </div>
  );
};
