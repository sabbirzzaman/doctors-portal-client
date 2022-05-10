import React from 'react';

const TestimonialCard = ({ review }) => {
    const { img, feedback, name, address } = review;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-left">
                <p>{feedback}</p>

                <div className="mt-4 gap-5 items-center flex">
                    <div className="avatar">
                        <div className="rounded-full w-16 ring ring-secondary ring-offset-2">
                            <img src={img} alt={name} />
                        </div>
                    </div>
                    <div>
                        <h4 className='font-bold'>{name}</h4>
                        <p>{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
