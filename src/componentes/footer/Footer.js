import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../navbar/navBarImg/logo.jpg";
import './footer.scss';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer row">
            <div className="col-12 col-lg-4">
                <Link to='/' className='text-secondary d-flex justify-content-around'>
                    <img src={logo} alt="logo" style={{ fontSize: "50px", textDecoration: 'none' }} />
                </Link>
            </div>
            <div className="footerCont footerMt col-12 col-lg-4 text-dark">
                <h1 className="d-flex justify-content-around fs-5">Contacto:</h1>
                <h2 className="d-flex justify-content-around fs-5">53221814325</h2>
            </div>
            <section className="footerMt footerCont col-12 col-lg-4 text-dark">
                <h1 className="fs-5 d-flex justify-content-around">Redes Sociales:</h1>
                <div className="d-flex justify-content-center my-2 text-dark">
                    <a className='text-dark' href="http://www.instagram.com">
                        <FaInstagram size="32" />
                    </a>
                    <a className='text-dark' href="http://www.facebook.com">
                        <FaFacebookF size="32" />
                    </a>
                    <a className='text-dark' href="http://www.twitter.com">
                        <FaTwitter size="32" />
                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;