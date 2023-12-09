// FileUploadPage.js
import React, { useState } from 'react';
import api from './api';
import { useNavigate } from 'react-router-dom';
import { useToast } from './contexts/ToastContext'
import VideoMetadata from './VideoMetadata';


const FileUploadPage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [isPublic, setIsPublic] = useState<boolean>(false);
    const [tags, setTags] = useState<[]>([]);
    const navigate = useNavigate();
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
        formData.append('title', title);
        formData.append('description', description);
        formData.append('isPublic', String(isPublic));
        formData.append('tags', tags.join(','));

        try {
            await api.uploadFile(formData);
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
        <>
            <div>
                <button className="back-button" onClick={() => { navigate('/home') }}>
                    Back
                </button>
            </div>
            <div>
                {(
                    <div>

                        <h2>Upload a File</h2>
                        <input type="file" onChange={handleFileChange} />
                        <button onClick={handleUpload}>Upload</button>
                    </div>
                )}
            </div>
            <VideoMetadata 
                title={title}
                setTitle={setTitle}
                description={description}
                setDescription={setDescription}
                isPublic={isPublic}
                setIsPublic={setIsPublic}
                tags={tags}
                setTags={setTags}
             />
        </>
    );
};

export default FileUploadPage;