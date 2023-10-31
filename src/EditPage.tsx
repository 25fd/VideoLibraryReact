import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const EditPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/home'); 
  };

  return (
    <div className="edit-page">
      {}
      <button className="back-button" onClick={handleGoBack}>
        Back
      </button>
      <div className="main-content">
        <video className="main-video" width="100%" controls>
          <source src="https://www.example.com/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="right-sidebar">
        <div className="sidebar-item">
          <label htmlFor="videoTitle">Video Title</label>
          <input type="text" id="videoTitle" name="videoTitle" placeholder="Enter video title" />
        </div>
        <div className="sidebar-item">
          <label htmlFor="tags">Tags</label>
          <input type="text" id="tags" name="tags" placeholder="Enter tags, separated by commas" />
        </div>
        <div className="sidebar-item">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" placeholder="Enter video description"></textarea>
        </div>
        <div className="sidebar-item checkbox-item">
          <label>
            To mark video private uncheck the box
            <input type="checkbox" defaultChecked={true} />
          </label>
        </div><br></br>
        <div className="sidebar-item">
          <label htmlFor="mergeVideos">Merge Videos</label>
          <button className="merge-button">+ Merge</button>
        </div>
        <div className="sidebar-item">
          <label htmlFor="thumbnailDropdown">Select Thumbnail</label>
          <select id="thumbnailDropdown" name="thumbnailDropdown">
            <option value="selectFromVideo">Select from Video</option>
            <option value="uploadThumbnail">Upload</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EditPage;
