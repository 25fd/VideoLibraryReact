import React from 'react';
import { useNavigate } from 'react-router-dom';
import VideoItem from './VideoItem';
import SearchBar from './SearchBar';

interface VideoListProps {
  videos: string[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  const [filteredVideos, setFilteredVideos] = React.useState(videos);
  const navigate = useNavigate(); 

  const handleSearch = (query: string) => {
    const filtered = videos.filter((video) =>
      video.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredVideos(filtered);
  };

  const handleLogout = () => {
    
    navigate('/login');
  };

  return (
    <div>
      <div className="button-container">
        <div className="button-row">
          <button type="submit" className="upload-button">Upload Video</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="video-list">
        {filteredVideos.map((video, index) => (
          <VideoItem key={index} video={video} />
        ))}
      </div>
    </div>
  );
};

export default VideoList;
