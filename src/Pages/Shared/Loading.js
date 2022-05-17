import React from 'react';

const Loading = ({height}) => {
    return (
        <div style={{height: height || '100vh'}} className='flex justify-center items-center'>
            <button className="btn loading btn-ghost">loading</button>
        </div>
    );
};

export default Loading;