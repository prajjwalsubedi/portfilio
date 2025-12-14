function Blog() {
    return (
        <div className="Blog">
            {/* <!-- Blog Section --> */}
            <section id="blog" class="section">
                <div class="container text-center">
                <h6 class="subtitle">My Blogs</h6>
                <h6 class="section-title mb-4">Recent Posts</h6>
                <p class="mb-5 pb-4">Explore insightful articles on accounting best practices, financial management tips, and expert advice for small businesses. Stay updated with practical guidance on bookkeeping, debt management, and accounting software. <br />
                    Dive into topics that help businesses maintain financial clarity and compliance.</p>
                    <div class="row text-left">
                        <div class="col-md-4">
                            <div class="card border mb-4">
                                <img src="assets/imgs/Blog/manage_debts.png" alt="" class="card-img-top w-100"/>
                                <div class="card-body">
                                    <h5 class="card-title">Manage Your Debts Without Trouble</h5>
                                    <div class="post-details">
                                        <a href="https://www.linkedin.com/in/prajjwalsubedi">Posted By: Prajjwal Subedi</a>
                                    </div>
                                    <p>
                                    Learn effective strategies for managing business and personal debts. Discover practical tips on debt consolidation, payment prioritization, and creating a sustainable repayment plan that keeps your finances healthy and stress-free.</p>
                                    <a href="https://www.linkedin.com/pulse/manage-your-debts-without-trouble-prajjwal-subedi/">Read More..</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card border mb-4">
                                <img src="assets/imgs/Blog/accounting_software_cost.png" alt="" class="card-img-top w-100"/>
                                <div class="card-body">
                                    <h5 class="card-title">Can Accounting Software Help Reduce Cost?</h5>
                                    <div class="post-details">
                                        <a href="https://www.linkedin.com/in/prajjwalsubedi">Posted By: Prajjwal Subedi</a>
                                    </div>
                                    <p>
                                    Discover how modern accounting software like QuickBooks and Xero can significantly reduce operational costs, minimize errors, and save time. Learn about the ROI of investing in the right accounting technology for your business.
                                    </p>
                                    <a href="https://www.linkedin.com/pulse/can-accounting-software-help-reduce-cost-prajjwal-subedi/">Read More..</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card border mb-4">
                                <img src="assets/imgs/Blog/bookkeeper_vs_accountant.png" alt="" class="card-img-top w-100"/>
                                <div class="card-body">
                                    <h5 class="card-title">Difference Between Bookkeeper and Accountant</h5>
                                    <div class="post-details">
                                        <a href="https://www.linkedin.com/in/prajjwalsubedi">Posted By: Prajjwal Subedi</a>
                                    </div>
                                    <p>
                                    Understand the key differences between bookkeepers and accountants, their roles, responsibilities, and how each contributes to your business's financial health. Learn when to hire which professional for your needs.
                                    </p>
                                    <a href="https://www.linkedin.com/pulse/difference-between-bookkeeper-accountant-prajjwal-subedi/">Read More..</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
  }
  
  export default Blog;