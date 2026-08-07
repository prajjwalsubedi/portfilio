function Footer() {
    return (
        <footer className="page-footer">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <p>
                            Copyright {new Date().getFullYear()} &copy;{" "}
                            <a href="/">Prajjwal Subedi</a>
                        </p>
                    </div>

                    <div className="col-sm-6">
                        <div className="socials">
                            <a
                                className="social-item"
                                href="https://www.linkedin.com/in/prajjwalsubedi"
                                aria-label="LinkedIn"
                            >
                                <i className="ti-linkedin"></i>
                            </a>

                            <a
                                className="social-item"
                                href="https://twitter.com/prazwolsubedi"
                                aria-label="Twitter"
                            >
                                <i className="ti-twitter"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
