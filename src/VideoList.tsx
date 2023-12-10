import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoItem from './VideoItem';
import SearchBar from './SearchBar';
import { useVideo } from './contexts/VideoContext'

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
  }, []);

  const handleSearch = () => {
    // const filtered = videos.filter((video) =>
    //   video.toLowerCase().includes(query.toLowerCase())
    // );
    // setFilteredVideos(filtered);
  };

  const handleLogout = () => {
    
    navigate('/VideoLibraryReact/login');
  };

  const onUploadClick = () => {
    navigate('/VideoLibraryReact/upload');
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

      <div className="container">


        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">My Files</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Shared Files</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Public Files</button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            {videoList.ownedFiles?.length ?
              (videoList.ownedFiles?.map((video, index) => (
                <VideoItem key={index} video={video} />
              ))) : "Nothing to show you here"}
          </div>
          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
            {videoList.sharedFiles?.length ?
              (videoList.sharedFiles?.map((video, index) => (
                <VideoItem key={index} video={video} />
              ))) : "Nothing to show you here"}
          </div>
          <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            {videoList.publicFiles?.length ?
              (videoList.publicFiles?.map((video, index) => (
                <VideoItem key={index} video={video} />
              ))) : "Nothing to show you here!!"}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoListPage;
