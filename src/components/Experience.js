function Experience() {
    return (
        <div className="Experience">
            {/* <!-- Experience section --> */}
            <section id="experience" class="section">
                <div class="container text-center">
                    <h6 class="subtitle">Experience</h6>
                    <h6 class="section-title mb-4">Highlights of My Professional Journey</h6>
                    <p class="mb-5 pb-4">Explore key roles and achievements that showcase my expertise in accounting, bookkeeping,
                        and financial management.</p>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card testmonial-card border">
                                <div class="card-body">
                                    <h1 class="title">Staff Accountant</h1>
                                    <h1 class="subtitle">Frye & Company, CPAs</h1>
                                    <p><br />April 2025 - Present<br />Process payroll for 15+ clients, manage full-cycle bookkeeping 
                                        for 25+ businesses, execute month-end close procedures, and prepare individual and business 
                                        tax returns for CPA review.
                                    </p>
                                    <button class="btn btn-primary rounded" type="button" data-toggle="modal" data-target="#staffAccountant">Learn More</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card testmonial-card border">
                                <div class="card-body">
                                    <h1 class="title">Tax Accountant</h1>
                                    <h1 class="subtitle">Logic Accountants Pty Ltd</h1>
                                    <p><br />April 2021 - April 2025<br />Managed payroll for 50+ clients, conducted comprehensive bank 
                                        and GL reconciliations, prepared BAS/IAS tax returns, and automated financial reporting 
                                        processes reducing close time by 30%.<br />
                                    </p>
                                    <button class="btn btn-primary rounded" type="button" data-toggle="modal" data-target="#taxAccountant">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Modals --> */}
            <div class="modal" tabindex="-1" role="dialog" id="staffAccountant">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title fs-5" id="staticBackdropLabel">Staff Accountant<br /></h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="modal-title fs-5" id="staticBackdropLabel">Frye & Company, CPAs - Manassas, VA<br /></h5>
                            <p><strong>April 2025 - Present</strong></p>
                            <ul>
                                <li>Process bi-weekly and semi-monthly payroll for 15+ clients, managing payroll tax deposits, quarterly Form 941 filings, and annual W-2/1099 preparation with 100% accuracy and on-time compliance.</li>
                                <li>Perform full-cycle bookkeeping including accounts payable/receivable, bank reconciliations, and journal entries for 25+ small to mid-sized businesses across diverse industries.</li>
                                <li>Execute month-end close procedures including GL account reconciliations, variance analysis, and preparation of financial statements (Balance Sheet, P&L, Cash Flow).</li>
                                <li>Prepare individual (Form 1040) and business tax returns (1120, 1120-S, 1065) for CPA review, demonstrating strong knowledge of U.S. tax code and deduction optimization.</li>
                                <li>Generate customized management reports and financial dashboards for clients, providing actionable insights to support business decision-making.</li>
                                <li>Collaborate with CPAs and senior accountants to ensure compliance with federal and state tax regulations.</li>
                                <li>Maintain accurate and organized financial records using QuickBooks Online and Desktop.</li>
                                <li>Communicate regularly with clients regarding their financial status, tax obligations, and accounting questions.</li>
                                <li>Assist with year-end audit preparation and tax planning strategies for clients.</li>
                                <li>Train clients on QuickBooks functionality and best practices for financial record-keeping.</li>
                            </ul>
                            <p><strong>Tools & Software:</strong> QuickBooks Online, QuickBooks Desktop, ADP, Gusto, Microsoft Excel, Bill.com, Expensify.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="modal" tabindex="-1" role="dialog" id="taxAccountant">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title fs-5" id="staticBackdropLabel">Tax Accountant</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h5 class="modal-title fs-5" id="staticBackdropLabel">Logic Accountants Pty Ltd - Rosebery, NSW, Australia</h5>
                            <p><strong>April 2021 - April 2025</strong></p>
                            <ul>
                                <li>Managed payroll operations for 50+ clients across multiple industries, ensuring accurate wage calculations, superannuation contributions, and compliance with Australian tax regulations and ATO requirements.</li>
                                <li>Conducted comprehensive bank and GL account reconciliations, identifying and resolving discrepancies totaling $500K+, improving financial reporting accuracy by 25%.</li>
                                <li>Prepared and lodged BAS (Business Activity Statements), IAS (Instalment Activity Statements), and quarterly payroll tax returns for clients with revenue ranging from $100K to $5M.</li>
                                <li>Performed month-end and year-end close procedures including accruals, depreciation schedules, and financial statement preparation for management and audit purposes.</li>
                                <li>Automated monthly financial reporting processes using Excel macros, reducing close timeline by 30% and minimizing manual entry errors.</li>
                                <li>Collaborated with clients and cross-functional teams to improve expense tracking, cash flow forecasting, and budget variance analysis.</li>
                                <li>Developed and maintained Google Sheets-based tracking system for multi-client project management and deadline monitoring.</li>
                                <li>Processed year-end tax returns for individuals and businesses, ensuring compliance with Australian taxation law.</li>
                                <li>Advised clients on tax planning strategies, deductions, and compliance requirements.</li>
                                <li>Maintained organized documentation for audit trails and regulatory compliance.</li>
                                <li>Used Xero and Oracle ERP systems for financial data management and reporting.</li>
                                <li>Trained junior staff on accounting procedures, software systems, and quality control processes.</li>
                                <li>Participated in client meetings to discuss financial performance and provide strategic recommendations.</li>
                            </ul>
                            <p><strong>Tools & Software:</strong> Xero, Oracle ERP, QuickBooks, Microsoft Excel (Advanced Macros), Google Sheets, ATO Online Services.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* <!-- End Of Modals --> */}
            {/* <!-- End of Experience section --> */}

        </div>
    );
  }
  
  export default Experience;