import React from 'react';

function Feature({ icon, title, children }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="cgt-feature h-100">
                <div className="cgt-feature-icon"><i className={icon}></i></div>
                <h5>{title}</h5>
                <p className="mb-0">{children}</p>
            </div>
        </div>
    );
}

function CGTDesk() {
    return (
        <main className="cgt-page">
            <section className="cgt-hero">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <span className="cgt-kicker">Desktop Capital Gains Workpapers</span>
                            <h1 className="cgt-title">CGT Desk</h1>
                            <p className="cgt-lead">
                                A desktop application for tracking shares, cryptocurrency, real estate and other capital assets,
                                with financial-year reporting, source tracing and country-aware tax workpapers for the United States,
                                United Kingdom and Australia.
                            </p>
                            <div className="cgt-actions">
                                <a className="btn btn-primary rounded" href="#download">Download CGT Desk</a>
                                <a className="btn btn-outline-primary rounded ml-2" href="#features">View Features</a>
                            </div>
                            <p className="cgt-note mt-3">
                                CGT Desk is currently in active development. Tax calculations should be reviewed before filing.
                            </p>
                        </div>
                        <div className="col-lg-5 mt-5 mt-lg-0">
                            <div className="cgt-preview-card">
                                <div className="cgt-preview-top">
                                    <strong>Financial Year Portfolio</strong>
                                    <span>FY 2026</span>
                                </div>
                                <div className="cgt-metric"><span>Closing cost balance</span><strong>$641,500</strong></div>
                                <div className="cgt-metric"><span>Market value</span><strong>$753,700</strong></div>
                                <div className="cgt-metric"><span>Realized gain</span><strong>$8,600</strong></div>
                                <div className="cgt-metric"><span>Unrealized gain</span><strong>$112,200</strong></div>
                                <div className="cgt-preview-foot">Click report amounts to trace back to source transactions.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" id="features">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="subtitle">Built for detailed capital gains work</h6>
                        <h2 className="section-title">One place for assets, calculations and tax workpapers</h2>
                    </div>
                    <div className="row">
                        <Feature icon="ti-stats-up" title="Shares & Securities">
                            Mandatory asset codes, parcel tracking, FIFO where applicable, holding periods, domestic and international shares.
                        </Feature>
                        <Feature icon="ti-exchange-vertical" title="Crypto">
                            Buys, sells, swaps, transfers, staking, rewards, mining, airdrops, fees and wallet or exchange tracking.
                        </Feature>
                        <Feature icon="ti-home" title="Real Estate">
                            Property cost basis, improvements, ownership, valuations, disposal costs and detailed workpapers.
                        </Feature>
                        <Feature icon="ti-import" title="Excel & CSV Import">
                            Map any spreadsheet headings, review a live ten-row preview, detect duplicates and preserve source rows.
                        </Feature>
                        <Feature icon="ti-location-pin" title="Accounts & Statements">
                            Track where every asset is held, link statements and reconcile quantities and values by account.
                        </Feature>
                        <Feature icon="ti-files" title="Tax Workpapers">
                            Financial-year summaries, realized and unrealized gains, holding detail, source tracing, PDF and Excel exports.
                        </Feature>
                    </div>
                </div>
            </section>

            <section className="section cgt-soft-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <h6 className="subtitle">Supported jurisdictions</h6>
                            <h2 className="section-title">Country-aware from file creation</h2>
                            <p>
                                Choose the country when a file is created. CGT Desk then uses the appropriate tax-year structure,
                                terminology and matching framework for that file.
                            </p>
                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-md-4 mb-3"><div className="cgt-country"><strong>United States</strong><span>Calendar or custom FY</span></div></div>
                                <div className="col-md-4 mb-3"><div className="cgt-country"><strong>United Kingdom</strong><span>Same-day, 30-day & Section 104 framework</span></div></div>
                                <div className="col-md-4 mb-3"><div className="cgt-country"><strong>Australia</strong><span>CGT parcel and 12-month reporting framework</span></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="subtitle">Workflow</h6>
                        <h2 className="section-title">From statement to tax report</h2>
                    </div>
                    <div className="cgt-steps">
                        <div><span>1</span><strong>Create Entity File</strong><small>Country, entity, FY ending month and currency</small></div>
                        <div><span>2</span><strong>Import Transactions</strong><small>Match headings and verify the live preview</small></div>
                        <div><span>3</span><strong>Track & Reconcile</strong><small>Accounts, statements, lots and year-end values</small></div>
                        <div><span>4</span><strong>Generate Reports</strong><small>Preview, drill down, PDF or Excel</small></div>
                    </div>
                </div>
            </section>

            <section className="section cgt-download-section" id="download">
                <div className="container">
                    <div className="cgt-download-box text-center">
                        <h2>Download CGT Desk</h2>
                        <p>
                            Windows and macOS installers will be published here as release builds become available.
                            The current project is still under active development.
                        </p>
                        <div className="mt-4">
                            <button className="btn btn-primary rounded" type="button" disabled>Windows Download Coming Soon</button>
                            <button className="btn btn-dark rounded ml-2" type="button" disabled>macOS Download Coming Soon</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default CGTDesk;
