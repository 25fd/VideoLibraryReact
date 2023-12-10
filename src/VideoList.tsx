import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import VideoItem from './VideoItem';
import SearchBar from './SearchBar';
import { useVideo } from './contexts/VideoContext'
import { Video } from './api'

interface VideoListProps {
  videos: string[];
}

const VideoListPage: React.FC<VideoListProps> = ({ videos }) => {
  const navigate = useNavigate();
  const { videos: videoList, getVideos } = useVideo(); 
  // const [filteredVideos, setFilteredVideos] = React.useState(videoList);


  useEffect(() => {
    getVideos().then(() => {
      console.log(videos);
    });
  },[]);

  const handleSearch = () => {
    // const filtered = videos.filter((video) =>
    //   video.toLowerCase().includes(query.toLowerCase())
    // );
    // setFilteredVideos(filtered);
  };

  const handleLogout = () => {
    
    navigate('/login');
  };

  const onUploadClick = () => {
    navigate('/upload');
  }

  return (
    <div>
      <div className="button-container">
        <div className="button-row">
          <button type="submit" className="upload-button" onClick={onUploadClick}>Upload Video</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="video-list">
        {videoList.ownedFiles?.map((video, index) => (
          <VideoItem key={index} video={video} />
        ))}
        {
           videoList.publicFiles &&videoList.publicFiles.map((video: Video, index) => (
            <VideoItem key={index} video={video} />
          ))
        }
      </div>
    </div>
  );
};

export default VideoListPage;
