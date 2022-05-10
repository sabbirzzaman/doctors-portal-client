import React from 'react';

const button = ({children}) => {
    return (
        <button className="btn btn-primary bg-gradient-to-r from-secondary to-accent text-white border-0">{children}</button>
    );
};

export default button;