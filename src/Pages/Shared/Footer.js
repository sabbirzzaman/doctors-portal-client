import React from 'react';
import bg from '../../assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
    return (
        <footer
            style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}
        >
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768] lg:max-w-[1240px] mx-auto">
                <div className="footer p-10">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </div>

                <div className='text-center pb-10'>
                    <p>
                        Copyright © {year} - Doctors Portal All right reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
