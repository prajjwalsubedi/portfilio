function Footer() {
    return (
      <div className="Footer">
           
            {/* <!-- Page Footer --> */}
            <footer class="page-footer">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-sm-6">
                            <p>Copyright
                                <script>document.write(new Date().getFullYear())</script> &copy; <a
                                    href="#" target="_blank">Prajjwal Subedi</a>
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <div class="socials">
                            <a class="social-item" href="https://www.linkedin.com/in/prajjwalsubedi"><i class="ti-linkedin"></i></a>
                            <a class="social-item" href="https://twitter.com/prazwolsubedi"><i class="ti-twitter"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- End of page footer --> */}
      </div>
    );
  }
  
  export default Footer;
  