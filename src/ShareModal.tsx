import React from 'react';

interface ShareModalProps {
  onClose: () => void; 
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  const [email, setEmail] = React.useState('');

  const handleConfirm = () => {
    
    onClose(); 
  };

  return (
    <div className="modal-overlay">
      <div className="share-modal">
        <h3 className="modal-heading">Share Video</h3>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="modal-input"
        />
        <div className="button-container">
          <button onClick={handleConfirm} className="modal-button confirm-button">
            Confirm
          </button>
          <button onClick={onClose} className="modal-button cancel-button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
