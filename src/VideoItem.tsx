import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShareModal from './ShareModal';
import  { Video } from './api'


interface VideoItemProps {
  video: Video;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const navigate = useNavigate();

  const handleShare = () => {
    setShowShareModal(true);
  };

  const closeShareModal = () => {
    setShowShareModal(false);
  };

  const handleEdit = () => {
    navigate('/edit?file=' + video._id);
  }

  return (
    <div className="video-item card" >
      <p>{video.title}</p>
      
      <video className="video-player" width="100%" controls>
        <source src={video?.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="buttons-container">
        <button className="edit-button" onClick={handleEdit}>
          Edit
        </button>
        <button className="share-button" onClick={handleShare}>
          Share
        </button>
      </div>
      <p>Description: {video.description}</p>
      <p>Tags:{video.tags} </p>
      {showShareModal && <ShareModal onClose={closeShareModal} fileId={video._id} />}
    </div>
  );
};

export default VideoItem;

