import React from 'react';
import quote from '../../assets/icons/quote.svg';
import person1 from '../../assets/images/people1.png';
import person2 from '../../assets/images/people2.png';
import person3 from '../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
            img: person1,
            name: 'Winson Herry',
            address: 'California',
        },
        {
            _id: 2,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
            img: person2,
            name: 'Winson Herry',
            address: 'California',
        },
        {
            _id: 3,
            feedback: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribution to using Content here, content',
            img: person3,
            name: 'Winson Herry',
            address: 'California',
        },
    ];

    return (
        <section>
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768] lg:max-w-[1240px] mx-auto pb-20 text-center">
                <div className="text-left flex justify-between">
                    <div>
                        <h4 className="font-bold text-lg text-secondary">
                            Testimonial
                        </h4>
                        <h2 className="text-4xl mb-8">Services We Provide</h2>
                    </div>
                    <div>
                        <img src={quote} className="w-44" alt="Quote" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <TestimonialCard
                            key={review._id}
                            review={review}
                        ></TestimonialCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
