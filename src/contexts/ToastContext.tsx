import React, {createContext, ReactNode, useContext} from "react";

type ToastContextType = {
    showToast: boolean;
    setShowToast: (showToast: boolean) => void;
    message: string;
    setMessage: (message: string) => void;
    type: string;
    setType: (type: string) => void;
};

const ToastContext = createContext({} as ToastContextType);

export const useToast = () => {
    return useContext(ToastContext);
}

export const ToastProvider = ({children} : { children: ReactNode}) => {
      const [showToast, setShowToast] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [type, setType] = React.useState("");

  const value = {
    showToast,
    setShowToast,
    message,
    setMessage,
    type,
    setType,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};
