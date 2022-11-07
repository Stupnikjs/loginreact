import React from 'react';

const Present = (props) => {
    return (
        <div className='presentation'>
            {props.user.name}
        </div>
    );
};

export default Present;