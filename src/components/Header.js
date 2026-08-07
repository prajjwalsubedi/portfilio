function Header({ showHero = true }) {
    const aboutHref = showHero ? '#about' : '/#about';
    const contactHref = showHero ? '#contact' : '/#contact';

    return (
        <div className="Header">
            {/* Shared navigation for both the portfolio and CGT Desk pages. */}
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" data-spy="affix" data-offset-top="0">
                <div className="container">
                    <h1>
                        <a className="navbar-brand" href="/">
                            <span className="f_Name">Prajjwal </span>
                            <span className="l_Name">Subedi</span>
                        </a>
                    </h1>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" href={aboutHref}>About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cgt-desk">CGT Desk</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary rounded ml-lg-4 mt-2 mt-lg-0" href={contactHref}>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {showHero && (
                <header className="header" id="home">
                    <div className="container">
                        <div className="infos">
                            <h6 className="subtitle">Hello, I'm</h6>
                            <h6 className="title">Prajjwal Subedi</h6>
                            <p>Staff &amp; Tax Accountant</p>

                            <div className="buttons pt-3">
                                <a className="btn btn-primary rounded" href="mailto:prajjwalsubedi95@gmail.com">Contact Me</a>
                                <a className="btn btn-dark rounded ml-2" href="assets/resume/PRAJJWAL_SUBEDI_Resume.pdf">DOWNLOAD CV</a>
                            </div>

                            <div className="socials mt-4">
                                <a className="social-item" href="https://www.linkedin.com/in/prajjwalsubedi" aria-label="LinkedIn"><i className="ti-linkedin"></i></a>
                                <a className="social-item" href="https://github.com/prajjwalsubedi" aria-label="GitHub"><i className="ti-github"></i></a>
                                <a className="social-item" href="https://twitter.com/prazwolsubedi" aria-label="Twitter"><i className="ti-twitter"></i></a>
                            </div>
                        </div>

                        <div className="img-holder">
                            <img src="assets/imgs/man.svg" alt="Illustration" />
                        </div>
                    </div>

                    <div className="widget">
                        <div className="widget-item">
                            <h2>75+</h2>
                            <p>Clients Managed</p>
                        </div>
                        <div className="widget-item">
                            <h2>4+</h2>
                            <p>Years Experience</p>
                        </div>
                        <div className="widget-item">
                            <h2>100%</h2>
                            <p>Tax Compliance</p>
                        </div>
                    </div>
                </header>
            )}
        </div>
    );
}

export default Header;
