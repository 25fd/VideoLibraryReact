import React from 'react';
import { Link } from 'react-router-dom';

interface VideoItemProps {
  video: string;
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  return (
    <div className="video-item">
      <p>Video Title</p>
      <video className="video-player" width="100%" controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="edit-button-container">
        <Link to="/edit" className="edit-button">
          Edit
        </Link><br/><br/>
        
        
      </div>
      <p> Description: </p>
      <p> Tags: </p>


      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Share
      </button>

      
    </div>
  );
};

export default VideoItem;



