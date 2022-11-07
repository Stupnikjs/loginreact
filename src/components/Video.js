import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube} from '@fortawesome/free-brands-svg-icons'

const Video = (props) => {
    return (
        <div className='video'>
            {props.id}
         <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        </div>
    );
};

export default Video;