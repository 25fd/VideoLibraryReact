import React, { createContext, useState, useContext } from 'react';
import api, {VideoList, Video}  from '../api';

type VideoContextType = {
    videos: VideoList;
    getVideoById: (id: string) => Video;
    getVideos: () => Promise<void>;

}

const VideoContext = createContext({} as VideoContextType);

export const useVideo = () => {
    return useContext(VideoContext);
}

export const VideoProvider = ({children} : { children: React.ReactNode}) => {
    const [videos, setVideos] = useState<VideoList>({});

    const getVideos = async () => {
        const response = await api.getUserFilesApi();
        setVideos(response);
    }

    const getVideoById = (id: string): Video => {
        const response = videos.ownedFiles?.find((video: Video) => video._id === id);
        return response || {} as Video;
    
    }

    
    

    return (
        <VideoContext.Provider value={{
            videos,
            getVideos,
            getVideoById
        }}>{children}</VideoContext.Provider>
    )
}