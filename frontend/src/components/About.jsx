import React from 'react'

const About = () => {
    return (
        <>
            <section className="ftco-about ftco-section ftco-no-pt ftco-no-pb" id="about-section">
                <div className="container">
                    <div className="row d-flex no-gutters">
                        <div className="col-md-6 col-lg-5 d-flex">
                            <div className="img-about img d-flex align-items-stretch">
                                <div className="overlay"></div>
                                <img className="img d-flex align-self-stretch align-items-center" src='./img/Goutam_Vankudre.png' alt='' />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-7 pl-md-4 pl-lg-5 py-5">
                            <div className="py-md-5">
                                <div className="row justify-content-start pb-3">
                                    <div className="col-md-12 heading-section ftco-animate">
                                        <span className="subheading">My Intro</span>
                                        <h2 className="mb-4" style={{ fontSize: '34px', textTransform: 'capitalize' }}>About Me</h2>
                                        <p>Hello and welcome! I graduated from DKTES Textile and Engineering Institute, Ichalkaranji, as a motivated and enthusiastic <span className='decorate'>Computer Science graduate</span>. I have developed strong expertise in <span className='decorate'>full-stack development</span> with skills in <span className='decorate'>HTML5, CSS, JavaScript, React.js, Node.js, MongoDB, and SQL</span>, along with hands-on experience in <span className='decorate'>Java</span> and <span className='decorate'>Spring Boot</span> for backend development. I am also knowledgeable in <span className='decorate'>Git/GitHub</span>, <span className='decorate'>REST APIs</span>, and deployment on cloud platforms like <span className='decorate'>AWS</span>.</p>

                                        <p>I enjoy learning emerging technologies such as <span className='decorate'>cloud computing</span> and <span className='decorate'>DevOps practices</span>, and I’m passionate about building <span className='decorate'>scalable</span>, <span className='decorate'>user-friendly applications</span>. As a <span className='decorate'>fresher</span>, I’m eager to contribute my skills to a <span className='decorate'>collaborative team</span>, continue growing as a <span className='decorate'>developer</span>, and deliver <span className='decorate'>innovative solutions</span>.</p>

                                        <ul className="mt-4 px-md-0 px-2">
                                            <li className="d-flex"><strong>Name:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>Vankudre Goutam Sunil</strong></span></li>
                                            <li className="d-flex"><strong>Date of birth:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>March 15, 2001</strong></span></li>
                                            <li className="d-flex"><strong>Address:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>Zenda Chowk, Ichalkaranji</strong></span></li>
                                            <li className="d-flex"><strong>Zip code:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>416 115</strong></span></li>
                                            <li className="d-flex"><strong>Email:</strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>vankudregoutam15@gmail.com</strong></span></li>
                                            <li className="d-flex"><strong>Phone: </strong> <span className='mx-2' style={{ color: '#b1b493' }}><strong>+91 77984 12022</strong></span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-12 hobbies">
                                        <div className="my-interest d-lg-flex w-100">
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center" style={{ height: 50, width: 60 }}>
                                                    <i className="fa-solid fa-music"></i>
                                                </div>
                                                <div className="text mx-2">Music</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center" style={{ height: 50, width: 60 }}>
                                                    <i className="fa-solid fa-compass"></i>
                                                </div>
                                                <div className="text mx-2">Travel</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center" style={{ height: 50, width: 60 }}>
                                                <i className="fa-solid fa-film"></i>
                                                </div>
                                                <div className="text mx-2">Movie</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center" style={{ height: 50, width: 60 }}>
                                                    <i className="fa-solid fa-volleyball"></i>
                                                </div>
                                                <div className="text mx-2">Sports</div>
                                            </div>
                                            <div className="interest-wrap d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center" style={{ height: 50, width: 60 }}>
                                                    <i className="fas fa-camera-retro"></i>
                                                </div>
                                                <div className="text mx-2">Photography</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
