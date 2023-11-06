import React from 'react';

type BootstrapToastProps = {
    type: string;
    message: string;
    onClose: () => void;
};

const BootstrapToast = ({ message, onClose }: BootstrapToastProps) => {
    return (
        <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 11 }}>
            <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-body">
                    {message}
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close" onClick={onClose}></button>
                </div>
            </div>
        </div>
    );
};

export default BootstrapToast;