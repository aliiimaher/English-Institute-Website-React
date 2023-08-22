import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SuccessNotiyfProps {
    text: string;
  }

function SuccessNotify ({ text } : SuccessNotiyfProps) {
    toast.success(text, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
}

export default SuccessNotify;