import React from 'react'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand mx-4" href="/"><h2>Goutam Vankudre</h2></a><br />
                    <p className='role'>Java Full Stack Developer | MERN Stack Developer</p>
                    <button className="navbar-toggler btn" style={{ border: 'none' }} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        MENU
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav section nav ml-auto">
                            <li className="nav-item"><a href="#about-section" className="nav-link"><span>About</span></a></li>
                            <li className="nav-item"><a href="#skills-section" className="nav-link"><span>Skills</span></a></li>
                            <li className="nav-item"><a href="#services-section" className="nav-link"><span>Services</span></a></li>
                            <li className="nav-item"><a href="#projects-section" className="nav-link"><span>Projects</span></a></li>
                            <li className="nav-item"><a href="#contact-section" className="nav-link"><span>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
            </nav><br /><br />
        </>
    )
}

export default NavBar
