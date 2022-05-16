import React from 'react';

const Loading = ({height}) => {
    return (
        <div style={{height: height}} className='flex justify-center items-center'>
            <button className="btn loading btn-ghost">loading</button>
        </div>
    );
};

export default Loading;