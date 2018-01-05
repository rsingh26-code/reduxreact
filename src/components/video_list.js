import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({videos, onSelectedVideo}) => {
  {console.log(videos)}
  const videoLists = videos.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video}
        onSelectedVideo={onSelectedVideo} />
      );
  });
  
  return (
    <ul className="col-md-4 list-group">
      {videoLists}
    </ul>
  );
}
export default VideoList;
