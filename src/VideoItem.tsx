import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ShareModal from './ShareModal';

interface VideoItemProps {
  video: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const [showShareModal, setShowShareModal] = useState(false);

  const handleShare = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  return (
    <div className="video-item">
      <p>Video Title</p>
      
      <video className="video-player" width="100%" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="buttons-container">
        <button className="edit-button">
          <Link to="/edit">Edit</Link>
        </button>
        <button className="share-button" onClick={handleShare}>
          Share
        </button>
      </div>
      <p>Description: </p>
      <p>Tags: </p>
      {showShareModal && <ShareModal onClose={closeShareModal} />}
    </div>
  );
};

export default VideoItem;

