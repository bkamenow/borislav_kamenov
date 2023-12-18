export default function About() {
    return (
        <div className='container-fluid'>
            <div id='about' className='row about-section'>
                <div className='col-lg-4 about-card'>
                    <h3 className='font-weight-light'>Who am I ?</h3>
                    <span className='line mb-5'></span>
                    <h5 className='mb-3'>Software Engineer / Developer</h5>
                    <p className='mt-20'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.sit amet, Qui deserunt consequatur fugit
                        repellendusillo voluptas?
                    </p>
                    <button className='btn btn-outline-danger'>
                        <i className='icon-down-circled2 '></i>Download My CV
                    </button>
                </div>
                <div className='col-lg-4 about-card'>
                    <h3 className='font-weight-light'>Personal Info</h3>
                    <span className='line mb-5'></span>
                    <ul className='mt40 info list-unstyled'>
                        <li>
                            <span>Birthdate</span> : 24/08/1995
                        </li>
                        <li>
                            <span>Email</span> : borislav.kamenow@gmail.com
                        </li>
                        <li>
                            <span>Phone</span> : + (359) 877 191 965
                        </li>

                        <li>
                            <span>Address</span> : Sofia, Bulgaria
                        </li>
                    </ul>
                    <ul className='social-icons pt-3'>
                        <li className='social-item'>
                            <a
                                className='social-link'
                                href='https://www.linkedin.com/in/bkamenow/'
                            >
                                <i
                                    className='ti-linkedin'
                                    aria-hidden='true'
                                ></i>
                            </a>
                        </li>
                        <li className='social-item'>
                            <a
                                className='social-link'
                                href='https://github.com/bkamenow'
                            >
                                <i className='ti-github' aria-hidden='true'></i>
                            </a>
                        </li>
                        <li className='social-item'>
                            <a
                                className='social-link'
                                href='https://www.facebook.com/bor8slav'
                            >
                                <i
                                    className='ti-facebook'
                                    aria-hidden='true'
                                ></i>
                            </a>
                        </li>

                        <li className='social-item'>
                            <a
                                className='social-link'
                                href='https://www.instagram.com/borislav.kamenow/'
                            >
                                <i
                                    className='ti-instagram'
                                    aria-hidden='true'
                                ></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-4 about-card'>
                    <h3 className='font-weight-light'>My Expertise</h3>
                    <span className='line mb-5'></span>
                    <div className='row'>
                        <div className='col-1 text-danger pt-1'>
                            <i className='ti-widget icon-lg'></i>
                        </div>
                        <div className='col-10 ml-auto mr-3'>
                            <h6>Web Development</h6>
                            <p className='subtitle'>
                                {" "}
                                exercitat Repellendus, corrupt.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1 text-danger pt-1'>
                            <i className='ti-paint-bucket icon-lg'></i>
                        </div>
                        <div className='col-10 ml-auto mr-3'>
                            <h6>?</h6>
                            <p className='subtitle'>
                                Lorem ipsum dolor sit consectetur.
                            </p>
                            <hr />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-1 text-danger pt-1'>
                            <i className='ti-stats-up icon-lg'></i>
                        </div>
                        <div className='col-10 ml-auto mr-3'>
                            <h6>UX&UI</h6>
                            <p className='subtitle'>
                                voluptate commodi illo voluptatib.
                            </p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
