// make bar into selectable tabs
// import css?
// this is not DRY, how to improve?
import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
    // ul into li format works better

    return (
        <ul className="nav nav-tabs">
            {/* // home tab */}
            <li className="nav-tab">
                <a href="#home" onClick={() => handlePageChange('home')}
                    // ternary operator checking to see if page is home page
                    className={currentPage === 'home' ? 'nav-link active' : 'nav-link'}
                > home
                </a>
            </li>
            {/* resume tab, get it to pop up in new window */}
            <li className="nav-tab">
                <a href="#resume" onClick={() => handlePageChange('resume')}
                    className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
                > resume
                </a>
            </li>
            <li className="nav-tab">
                {/* contact tab */}
                <a href="#contact" onClick={() => handlePageChange('contact')}
                    className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
                > contact
                </a>
            </li>
            <li className="nav-tab">
                {/* about me tab */}
                <a href="#aboutMe" onClick={() => handlePageChange('aboutMe')}
                    className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
                > about me
                </a>
            </li>
        </ul>
    )
}

export default Navbar;