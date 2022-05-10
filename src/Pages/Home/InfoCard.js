import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const InfoCard = ({icon, title, info, bg}) => {
    return (
        <div className={`card card-side bg-primary shadow-xl p-10 md:p-8 gap-8 ${bg}`}>
            <figure>
                <FontAwesomeIcon className='text-3xl md:text-3xl text-white' icon={icon}></FontAwesomeIcon>
            </figure>
            <div className="card-body p-0 text-white">
                <h2 className="card-title">{title}</h2>
                <p>{info}</p>
            </div>
        </div>
    );
};

export default InfoCard;