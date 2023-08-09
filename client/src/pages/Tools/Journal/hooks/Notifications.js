import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyNoteIncomplete = () => {
  toast.warn('Complete the note before submitting', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  });
};
