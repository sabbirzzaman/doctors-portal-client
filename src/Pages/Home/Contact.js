import React from 'react';
import bg from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section style={{ backgroundImage: `url(${bg})` }}>
            <div className='max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[1240px] mx-auto text-center py-20'>
                <h4 className="font-bold text-lg text-secondary">Contact Us</h4>
                <h2 className="text-4xl mb-8 text-white">Stay connected with us</h2>

                <form className='max-w-3xl mx-auto'>
                    <div>
                        <input className='input w-full max-w-xl mb-5' placeholder='Email address' type="email" />
                    </div>
                    <div>
                        <input className='input w-full max-w-xl mb-5' placeholder='Subject' type="text" />
                    </div>
                    <div>
                        <textarea className='textarea w-full max-w-xl mb-5 pt-2' placeholder='Your Message' rows="5"></textarea>
                    </div>
                    <div>
                        <input type="submit" className='btn btn-primary bg-gradient-to-r from-secondary to-accent text-white border-0' value="Submit" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
