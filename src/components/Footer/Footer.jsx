export default function Footer() {
    return (
        <footer className='footer py-3'>
            <div className='container'>
                <p className='small mb-0 text-light'>
                    &copy; {new Date().getFullYear()}
                    <a
                        href='https://www.linkedin.com/in/bkamenow/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span
                            className='text-danger'
                            title='Bootstrap 4 Themes and Dashboards'
                        >
                            {" "}
                            Borislav Kamenov
                        </span>{" "}
                        <i className='ti-heart text-danger'></i>
                    </a>
                </p>
            </div>
        </footer>
    );
}
