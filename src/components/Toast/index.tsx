import { toast, ToastOptions } from 'react-toastify';

const defaultConfig: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
}

export const toastError = (msg: string) => toast.error(msg, defaultConfig);

export const toastSucess = (msg: string) => toast.success(msg, defaultConfig);

export const toastWarning = (msg: string) => toast.warn(msg, defaultConfig);