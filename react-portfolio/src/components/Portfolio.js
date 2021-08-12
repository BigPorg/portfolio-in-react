// this is like the body
// import React, { useState } from 'react';
// import Navbar from './Navbar';
// import AboutMe from './AboutMe';
// import Header from './Header';
// import Footer from './Footer';

// function Portfolio() {
//     const [currentPage, setCurrentPage] = useState('home');
//     const renderPage = () => {
//         if (currentPage === 'home') {
//             return <Home />;
//         } else if (currentPage === 'AboutMe') {
//             return <AboutMe />;
//         } else if (currentPage === 'Header') {
//             return <Header />;
//         }
//     }
// }

// export default Portfolio;
// this whole part is not needed, I think

import React from 'react';
// import css!

function Portfolio() {
    return (
        <section className="container">
            <div className="row text-center">
                <h2 className="col-12 my-3">Portfolio</h2>
                {/* title and image, copy and paste this 
                part, keep it DRY */}
                <div className="container col-sm-4 my-3">
                    <div className="image">
                        <div className="overlay">
                            <h4>Project 1 Title Goes Here</h4>
                        </div>
                    </div>
                </div>
                <div className="container col-sm-4 my-3">
                    <div className="image">
                        <div className="overlay">
                            <h4>Project 2 Title Goes Here</h4>
                        </div>
                    </div>
                </div>
                <div className="container col-sm-4 my-3">
                    <div className="image">
                        <div className="overlay">
                            <h4>Project 3 Title Goes Here</h4>
                        </div>
                    </div>
                </div>
                <div className="container col-sm-4 my-3">
                    <div className="image">
                        <div className="overlay">
                            <h4>Project 4 Title Goes Here</h4>
                        </div>
                    </div>
                </div>
                <div className="container col-sm-4 my-3">
                    <div className="image">
                        <div className="overlay">
                            <h4>Project 5 Title Goes Here</h4>
                        </div>
                    </div>
                </div>
                <div className="container col-sm-4 my-3">
                    <div className="image">
                        <div className="overlay">
                            <h4>Project 6 Title Goes Here</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;