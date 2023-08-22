import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ErrorNotiyfProps {
    text: string;
  }

function ErrorNotify ({ text } : ErrorNotiyfProps) {
    toast.error(text, {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
}

export default ErrorNotify;