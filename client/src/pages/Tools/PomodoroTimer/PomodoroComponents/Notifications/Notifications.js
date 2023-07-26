import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const breakFinished = () => {
  toast.info('😎 Time for work', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
export const workFinished = () => {
  toast.info('🎉 Time for break', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  });
};
