import React from 'react';

const VideoListItem = ({video, onSelectedVideo}) => {
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item" onClick={() => onSelectedVideo(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageUrl} className="media-object" />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{video.snippet.title}</div>
      </div>
    </li>
  ); 
}
export default VideoListItem;