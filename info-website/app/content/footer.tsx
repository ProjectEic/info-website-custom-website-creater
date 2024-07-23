import React from 'react';

const Footer = () => {
    return (
        <footer className="footer w-[80vw]">
            <nav className="footer-nav">
                <ul className="footer-nav-list flex flex-row justify-evenly">
                    <li className="footer-nav-item hover:underline">
                        <a href="/impressum" className="footer-nav-link">Impressum</a>
                    </li>
                    <li className="footer-nav-item hover:underline">
                        <a href="/datenschutz" className="footer-nav-link">Datenschutz</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;