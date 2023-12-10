import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import VideoMetadata  from './VideoMetadata';''
import api from './api';
import { useLocation } from 'react-router-dom';
import { 
  useVideo,
 } from './contexts/VideoContext';

const EditPage: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');
  const [isPublic, setIsPublic] = React.useState<boolean>(false);
  const [tags, setTags] = React.useState<string[]>([]);
  const location = useLocation();
  const fileId = location.search.split('=')[1];
  const [url, setUrl] = React.useState<string>('');
  const { getVideoById } = useVideo();

  useEffect(() => {
    const video = getVideoById(fileId)
      setTitle(video.title);
      setDescription(video.description);
      setIsPublic(video.isPublic);
      setTags(video.tags);
      setUrl(video.url);
  }, []);

  const handleSubmit = async () => {
    const metadata ={ 
      title: title,
      description: description,
      isPublic: isPublic,
      tags: tags,
    };
    try {
      await api.updateFileApi(fileId, metadata);
    } catch (error) {
      console.error(error);
    }
  };

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
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <VideoMetadata
        title={title}
        setTitle={setTitle}
        tags={tags}
        setTags={setTags}
        description={description}
        setDescription={setDescription}
        isPublic={isPublic}
        setIsPublic={setIsPublic}
       />
       <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default EditPage;
