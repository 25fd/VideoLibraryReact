import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import VideoList from './VideoList';
import EditPage from './EditPage';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { useToast } from './contexts/ToastContext';
import { Outlet } from 'react-router-dom';
import Tost from './Tost';
import FileUpload from './FileUploadPage';
import { VideoProvider } from './contexts/VideoContext'

const PrivateRoute:React.FC = () => {
  const { user } = useAuth();

  return user ? <Outlet />: <Navigate to="/VideoLibraryReact/login" />
};

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

  const { showToast, setShowToast, message, type } = useToast();

  console.log(showToast, setShowToast, message, type);
  return (
    <Router>
      <div>
        <nav>
          <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Video Library <a href="#"></a></h1>

        </nav>
       {
          showToast && (
            <Tost message={message} onClose={() => setShowToast(false)}/>
          )
       }
        <AuthProvider>
          <VideoProvider>
        <Routes>
        <Route path='/VideoLibraryReact/' element={<PrivateRoute/>}>
        <Route path="/VideoLibraryReact/home" element={<VideoList videos={sampleVideos} />} />
          <Route path="/VideoLibraryReact/edit" element={<EditPage />} />
          <Route path='/VideoLibraryReact/upload' element={<FileUpload/>}/>
          </Route>
          <Route path="/VideoLibraryReact/login" element={<LoginPage />} />
          <Route path="/VideoLibraryReact/signup" element={<SignupPage />} />

          
        </Routes>
        </VideoProvider>
        </AuthProvider>
      
        <nav style={{textAlign: 'center', width: '100%'}} id='footer'>
          <h2>Video Library@2023</h2>
        </nav>
      </div>
    </Router>
  );
};

export default App;
