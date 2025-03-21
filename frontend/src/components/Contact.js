import React, { useState } from 'react'

const Contact = () => {

    const [credentials, setCredentials] = useState({ name: '', email: '', subject: '', message: '' })

    const host = process.env.BACKEND_URI || 'https://my-portfolio-d9r9.onrender.com'

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(`${host}/api/message/addMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, subject: credentials.subject, message: credentials.message }),
        })
        const json = await response.json()
        .then(window.alert('Your message has been sent!'))
    }

    return (
        <>
            <section className="ftco-section contact-section ftco-no-pb" id="contact-section">
                <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                        <div className="col-md-7 heading-contact text-center ftco-animate"><br /><br /><br /><br />
                            <span className="subheading">Contact us</span>
                            <h2 className="mb-4">Have a Project?</h2>
                            <p>Fell free to contact me.</p>
                        </div>
                    </div>
                    <div className="row block-9">
                        <div className="col-md-8 form-section">
                            <form action="#" onSubmit={handleSubmit} className="bg-light p-4 p-md-5 contact-form">
                                <div className="row">
                                    <div className="col-md-6 my-2">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name='name' id='name' autoComplete='off' value={credentials.name} onChange={handleChange} placeholder="Your Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 my-2">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name='email' id='email' autoComplete='off' value={credentials.email} onChange={handleChange} placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-2">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name='subject' id='subject' autoComplete='off' value={credentials.subject} onChange={handleChange} placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-2">
                                        <div className="form-group">
                                            <textarea name="message" id="message" autoComplete='off' value={credentials.message} cols="30" rows="7" className="form-control" onChange={handleChange} placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12 my-2">
                                        <div className="form-group">
                                            <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-4 d-flex pl-md-5 contact-details">
                            <div className="row">
                                <div className="dbox w-100 d-flex">
                                    <button className='btn btn-contact btn-outline-light'><i className="fa-solid fa-location-dot"></i></button>
                                    <div className="contact-text">
                                        <p><span className='mx-2'>Address:</span><br /><a className='btn' target='_blank' rel="noreferrer" href="https://maps.app.goo.gl/6mqPH9KAPWPdvDUAA">Ichalkaranji, Maharashtra, India</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <button className='btn btn-contact btn-outline-light'><i className="fa-solid fa-phone"></i></button>
                                    <div className="contact-text">
                                        <p><span className='mx-2'>Phone:</span><br /><a className='btn' target='_blank' rel="noreferrer" href="tel://7798412022">+91 77984 12022</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <button className='btn btn-contact btn-outline-light'><i className="fa-solid fa-paper-plane"></i></button>
                                    <div className="contact-text">
                                        <p><span className='mx-2'>Email:</span><br /><a className='btn' href="mailto:vankudregoutam15@gmail.com">vankudregoutam15@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <button className='btn btn-contact btn-outline-light'><i className="fa-brands fa-linkedin"></i></button>
                                    <div className="contact-text">
                                        <p><span className='mx-2'>LinkedIn</span><br /><a className='btn' target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/goutamvankudre/">https://www.linkedin.com/in/goutamvankudre/</a></p>
                                    </div>
                                </div>
                                <div className="dbox w-100 d-flex">
                                    <button className='btn btn-contact btn-outline-light'><i className="fa-brands fa-github"></i></button>
                                    <div className="contact-text">
                                        <p><span className='mx-2'>GitHub</span><br /><a className='btn' target='_blank' rel="noreferrer" href="https://github.com/vankudregoutam">https://github.com/vankudregoutam</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br /><br /><br />
        </>
    )
}

export default Contact
