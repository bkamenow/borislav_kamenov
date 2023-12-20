export default function Nav() {
    return (
        <nav
            className='navbar sticky-top navbar-expand-lg navbar-light bg-white'
            data-spy='affix'
            data-offset-top='510'
        >
            <div className='container'>
                <button
                    className='navbar-toggler ml-auto'
                    type='button'
                    data-toggle='collapse'
                    data-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse mt-sm-20 navbar-collapse'
                    id='navbarSupportedContent'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <a href='#home' className='nav-link'>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className='nav-link'>
                                About
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#resume' className='nav-link'>
                                Resume
                            </a>
                        </li>
                    </ul>
                    <ul className='navbar-nav brand'>
                        <img
                            src='/imgs/avatar.jpg'
                            alt=''
                            className='brand-img'
                        />
                        <li className='brand-txt'>
                            <h5 className='brand-title'>Borislav Kamenov</h5>
                            <div className='brand-subtitle'>Web Developer</div>
                        </li>
                    </ul>
                    <ul className='navbar-nav ml-auto'>
                        <li className='nav-item'>
                            <a href='#portfolio' className='nav-link'>
                                Portfolio
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#blog' className='nav-link'>
                                Blog
                            </a>
                        </li>
                        <li className='nav-item last-item'>
                            <a href='#contact' className='nav-link'>
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
