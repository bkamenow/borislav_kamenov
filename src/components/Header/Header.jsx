export default function Header() {
    return (
        <header className='header'>
            <div className='container'>
                <ul className='social-icons pt-3'>
                    <li className='social-item'>
                        <a className='social-link text-light' href='#'>
                            <i className='ti-facebook' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='social-item'>
                        <a className='social-link text-light' href='#'>
                            <i className='ti-twitter' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='social-item'>
                        <a className='social-link text-light' href='#'>
                            <i className='ti-google' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='social-item'>
                        <a className='social-link text-light' href='#'>
                            <i className='ti-instagram' aria-hidden='true'></i>
                        </a>
                    </li>
                    <li className='social-item'>
                        <a className='social-link text-light' href='#'>
                            <i className='ti-github' aria-hidden='true'></i>
                        </a>
                    </li>
                </ul>
                <div className='header-content'>
                    <h4 className='header-subtitle'>Hello, I am</h4>
                    <h1 className='header-title'>Borislav Kamenov</h1>
                    <h6 className='header-mono'>Web Developer</h6>
                </div>
            </div>
        </header>
    );
}
