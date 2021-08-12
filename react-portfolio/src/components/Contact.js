import React from 'react';
// import css

function Contact() {
    return (
        <section className="container">
            <div className="row text-center">
                <h2>Contact me</h2>
                {/* this feels like the same stuff that is in the footer, is this DRY? */}
                <form className="col-12">
                    <div className="mb-3">
                        <label for="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    {/* this worked, follow the above format */}
                    <div className="mb-3">
                        <label for="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label for="message" className="form-label">Message for me</label>
                        <textarea className="form-control" placeholder="write your message here"
                            id="message">
                        </textarea>
                        <button type="submit" className="btn">Send it</button>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Contact;