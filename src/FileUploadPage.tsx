// FileUploadPage.js
import React, { useState } from 'react';
import api from './api';
import { useNavigate } from 'react-router-dom';
import { useToast } from './contexts/ToastContext'


const FileUploadPage = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
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
        </>
    );
};

export default FileUploadPage;