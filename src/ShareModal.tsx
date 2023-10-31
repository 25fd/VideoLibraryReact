import React from 'react';

interface ShareModalProps {
  onClose: () => void; // Function to close the modal
}

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
  const [email, setEmail] = React.useState('');

  const handleConfirm = () => {
    // Handle the sharing functionality here (e.g., send the email)
    // You can customize this function as needed.
    onClose(); // Close the modal after confirming
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
