import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer row">
            <div className="col-12 col-lg-4">
                <a href="index.html">
                    <h1 className="text-dark fs-1 logoFooter d-flex justify-content-around">
                    </h1>
                </a>
            </div>
            <div className="footerCont footerMt col-12 col-lg-4 text-dark">
                <h1 className="d-flex justify-content-around fs-5">Contacto:</h1>
                <h2 className="d-flex justify-content-around fs-5">53221814325</h2>
            </div>
            <section className="footerMt footerCont col-12 col-lg-4 text-dark">
                <h1 className="fs-5 d-flex justify-content-around">Redes Sociales:</h1>
                <div className="d-flex justify-content-center">
                    <a href="http://www.Instagram.com">

                    </a>
                </div>
            </section>
        </footer>
    );
};

export default Footer;