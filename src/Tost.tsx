import './Toast.css';

type ToastProps = {
  message: string;
  onClose: () => void;
};

const Toast = ({ message, onClose }: ToastProps) => {
  return (
    <div className="toast">
      <div className="toast-body">
        {message}
        <button className="toast-close" onClick={onClose}>x</button>
      </div>
    </div>
  );
};

export default Toast;