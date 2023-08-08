import { BsFillPinAngleFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons';
import { BiSolidEditAlt, BiSolidColorFill } from 'react-icons/bi';
export const EditWindow = () => {
  <div>
    <button type="button" title="Pin">
      <BsFillPinAngleFill />
    </button>
    <button type="button" title="Delete">
      <AiFillDelete />
    </button>
    <button type="button" title="Edit content">
      <BiSolidEditAlt />
    </button>
    <button type="button" title="Change color">
      <BiSolidColorFill />
    </button>
  </div>;
};
