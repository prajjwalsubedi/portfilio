function Testmonial() {
    return (
      <div className="Testmonial">
                {/* <!-- Testmonial Section --> */}
    <section id="testmonial" class="section">
        <div class="container text-center">
            <h6 class="subtitle">Testimonials</h6>
            <h6 class="section-title mb-4">What People Say About Me</h6>
            <p class="mb-5 pb-4">Don't just take my word for it - here's what colleagues, clients, and educators have to say about working with me.</p>


            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card testmonial-card border">
                            <div class="card-body">
                                <img src="assets/imgs/avatar-1.jpg" alt=""/>
                                <p>"Prajjwal takes every task as a challenge and completes it successfully. He is hardworking, excellent with numbers, and extremely punctual. Everyone in the company values his sense of expertise in making things quite easy to understand."</p>
                                <h1 class="title">Anup Bajgain</h1>
                                <h1 class="subtitle">Experienced Accountant and Tax Consultant</h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card testmonial-card border">
                            <div class="card-body">
                                <img src="assets/imgs/avatar-2.jpg" alt=""/>
                                <p>"Knowing Prajjwal for more than 4 years now I can tell with confidence that he is an amazing person. Always helpful and approachable as a friend. Eager to learn new things everyday and very focused and determined in what he does. His broad IT skills were really handy. He is my go-to person whenever I need help/advice in something related to Accounting or IT."</p>
                                <h1 class="title">Kopila Adhikari</h1>
                                <h1 class="subtitle">Registered Nurse, Former Classmate</h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card testmonial-card border">
                            <div class="card-body">
                                <img src="assets/imgs/avatar-3.jpg" alt=""/>
                                <p>"Prajjwal is a hardworking personality with vast knowledge of Information Technology. Prajjwal has been assisting me with my website development and I am very much satisfied by his work and his dedication towards the project."</p>
                                <h1 class="title">Sapana Khadka</h1>
                                <h1 class="subtitle">Business Analyst, Former Client</h1>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card testmonial-card border">
                            <div class="card-body">
                                <img src="assets/imgs/avatar-4.jpg" alt=""/>
                                <p>"Prajjwal is a highly dedicated student who continuously strived to achieve good outcomes in his assessments. He is a very outgoing person who was always happy to share his experience and assist other students in teamwork activities. I highly commend Prajjwal for his personality, hard work and dedication."</p>
                                <h1 class="title">Fadi Kotob, PhD</h1>
                                <h1 class="subtitle">Senior Lecturer & Education Coach</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End of testmonial section --> */}
      </div>
    );
  }
  
  export default Testmonial;