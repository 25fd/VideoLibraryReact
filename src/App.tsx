import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import VideoList from './VideoList';
import EditPage from './EditPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';


const App: React.FC = () => {
  const sampleVideos = [
    'https://www.example.com/video1.mp4',
    'https://www.example.com/video2.mp4',
    'https://www.example.com/video3.mp4',
    'https://www.example.com/video4.mp4',
    'https://www.example.com/video5.mp4',
    'https://www.example.com/video6.mp4',
    'https://www.example.com/video7.mp4',
    'https://www.example.com/video8.mp4',
    'https://www.example.com/video9.mp4',
    'https://www.example.com/video10.mp4',
    'https://www.example.com/video11.mp4',
    'https://www.example.com/video12.mp4',
    'https://www.example.com/video13.mp4',
    'https://www.example.com/video14.mp4',
    'https://www.example.com/video15.mp4',
    'https://www.example.com/video16.mp4',
    'https://www.example.com/video17.mp4',
    'https://www.example.com/video18.mp4',
    'https://www.example.com/video19.mp4',
    'https://www.example.com/video20.mp4'
  ];

  return (
    <Router>
      <div>
        <nav>
          <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Video Library <a href="#"></a></h1>

        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/home" element={<VideoList videos={sampleVideos} />} />
          <Route path="/edit" element={<EditPage />} />

          
        </Routes>
        <nav style={{textAlign: 'center'}} id='footer'>
          <h2>Video Library@2023</h2>
        </nav>
      </div>
    </Router>
  );
};

export default App;
