import React from 'react';
import Video from './Video';
import { useState } from 'react';

const ZoneVideo = () => {

   const  [videos, setVideos] = useState([1,1,2,2,32,2,21,31])
    return (
        <div className='zoneVideo'>
            {videos.map((element) => { return(
                <Video id={element}></Video>)})}
        </div>
    );
};

export default ZoneVideo;