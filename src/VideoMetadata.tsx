import React, { useState } from "react";

type VideoMetadataProps = {
    title: string;
    setTitle: (title: string) => void;
    tags: string[];
    setTags: (tags: []) => void;
    description: string;
    setDescription: (description: string) => void;
    isPublic: boolean;
    setIsPublic: (isPublic: boolean) => void;
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

}:  VideoMetadataProps) => {
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
                    onChange={(e) => setTags(e.target.value.split[','])}
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
            <div className="sidebar-item">
                <label htmlFor="mergeVideos">Merge Videos</label>
                <button className="merge-button">+ Merge</button>
            </div>
            <div className="sidebar-item">
                <label htmlFor="thumbnailDropdown">Select Thumbnail</label>
                <select id="thumbnailDropdown" name="thumbnailDropdown">
                    <option value="selectFromVideo">Select from Video</option>
                    <option value="uploadThumbnail">Upload</option>
                </select>
            </div>
        </div>
    );
};

export default VideoMetadata;