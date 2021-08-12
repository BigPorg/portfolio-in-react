// link github, email, linkdin
import React from 'react';
// import CSS?

function Footer() {
    return (
        <footer className="mt-auto">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/BigPorg" target="_blank" rel="noreferrer">github</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/eric-devine-863250182/" target="_blank" rel="noreferrer">linkedin</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="mailto:eric.devine17@gmail.com" target="_blank" rel="noreferrer">email</a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;