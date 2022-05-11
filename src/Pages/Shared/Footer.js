import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../assets/images/footer.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-[325px] sm:max-w-[568px] md:max-w-[768px] lg:max-w-[940px] mx-auto">
                <div className="footer p-10 justify-between">
                    <div>
                        <span className="footer-title">Services</span>
                        <Link to="#" className="link link-hover">
                            Branding
                        </Link>
                        <Link to="#" className="link link-hover">
                            Design
                        </Link>
                        <Link to="#" className="link link-hover">
                            Marketing
                        </Link>
                        <Link to="#" className="link link-hover">
                            Advertisement
                        </Link>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <Link to="#" className="link link-hover">
                            About us
                        </Link>
                        <Link to="#" className="link link-hover">
                            Contact
                        </Link>
                        <Link to="#" className="link link-hover">
                            Jobs
                        </Link>
                        <Link to="#" className="link link-hover">
                            Press kit
                        </Link>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <Link to="#" className="link link-hover">
                            Terms of use
                        </Link>
                        <Link to="#" className="link link-hover">
                            Privacy policy
                        </Link>
                        <Link to="#" className="link link-hover">
                            Cookie policy
                        </Link>
                    </div>
                </div>

                <div className="text-center pb-10">
                    <p>
                        Copyright © {year} - Doctors Portal All right reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
