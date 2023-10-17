import React from 'react';
import VideoItem from './VideoItem';

interface VideoListProps {
  videos: string[];
}

const VideoList: React.FC<VideoListProps> = ({ videos }) => {
  return (
    <div>
      <button type="submit">Upload</button>
    <div className="video-list">
      {videos.map((video, index) => (
        <VideoItem key={index} video={video} />
      ))}
    </div>
    </div>
    
  );
};

export default VideoList;
