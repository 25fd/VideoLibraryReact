import React, { useState } from "react";
import api from './api';
import { useToast } from './contexts/ToastContext'


type VideoMetadataProps = {
    title: string;
    setTitle: (title: string) => void;
    tags: string;
    setTags: (tags: string) => void;
    description: string;
    setDescription: (description: string) => void;
    isPublic: boolean;
    setIsPublic: (isPublic: boolean) => void;
    fileId: string;
};

const VideoMetadata = ({
    title,
    setTitle,
    tags,
    setTags,
    description,
    setDescription,
    isPublic,
    setIsPublic,
    fileId
}: VideoMetadataProps) => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const {
        setShowToast,
        setMessage,
        setType,
    } = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.target.files && e.target.files.length > 0) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setType('error');
            setMessage('Please select a file to upload');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            await api.uploadThumbnail(fileId, formData);
            setType('success');
            setMessage('File uploaded successfully');
        } catch (error) {
            console.error(error);
            setType('error');
            setMessage('Error uploading the file. Please try again.');
        }
        setShowToast(true);
    };

    return (
        <div className="right-sidebar">
            <div className="sidebar-item">
                <label htmlFor="videoTitle">Video Title</label>
                <input
                    type="text"
                    id="videoTitle"
                    name="videoTitle"
                    placeholder="Enter video title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="sidebar-item">
                <label htmlFor="tags">Tags</label>
                <input
                    type="text"
                    id="tags"
                    name="tags"
                    placeholder="Enter tags, separated by commas"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />
            </div>
            <div className="sidebar-item">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    placeholder="Enter video description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
            </div>
            <div className="sidebar-item checkbox-item">
                <label>
                    To mark video private uncheck the box
                    <input
                        type="checkbox"
                        checked={isPublic}
                        onChange={(e) => setIsPublic(e.target.checked)}
                    />
                </label>
            </div>
            <br />

            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>

        </div>
    );
};

export default VideoMetadata;