import React, { useEffect, useState } from 'react';

function Feature({ icon, title, children }) {
    return (
        <div className="col-md-6 col-lg-4 mb-4">
            <div className="cgt-feature h-100">
                <div className="cgt-feature-icon">
                    <i className={icon}></i>
                </div>

                <h5>{title}</h5>

                <p className="mb-0">
                    {children}
                </p>
            </div>
        </div>
    );
}


function CGTDesk() {
    const [release, setRelease] = useState(null);
    const [loadingRelease, setLoadingRelease] = useState(true);
    const [releaseError, setReleaseError] = useState(false);

    useEffect(() => {
        const loadRelease = async () => {
            try {
                const response = await fetch(
                    'https://raw.githubusercontent.com/prajjwalsubedi/cgt-desk-updates/main/latest.json',
                    {
                        cache: 'no-store'
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        `Unable to load CGT Desk release information: ${response.status}`
                    );
                }

                const data = await response.json();

                setRelease(data);
                setReleaseError(false);
            } catch (error) {
                console.error('CGT Desk release check failed:', error);

                setRelease(null);
                setReleaseError(true);
            } finally {
                setLoadingRelease(false);
            }
        };

        loadRelease();
    }, []);


    const windowsDownload =
        release?.windows?.downloadUrl || null;

    const macIntelDownload =
        release?.mac?.intel?.downloadUrl || null;

    const macAppleSiliconDownload =
        release?.mac?.appleSilicon?.downloadUrl || null;


    return (
        <main className="cgt-page">

            <section className="cgt-hero">
                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <span className="cgt-kicker">
                                Desktop Capital Gains Workpapers
                            </span>

                            <h1 className="cgt-title">
                                CGT Desk
                            </h1>

                            <p className="cgt-lead">
                                A desktop application for tracking shares,
                                cryptocurrency, real estate and other capital assets,
                                with financial-year reporting, source tracing and
                                country-aware tax workpapers for the United States,
                                United Kingdom and Australia.
                            </p>

                            <div className="cgt-actions">

                                <a
                                    className="btn btn-primary rounded"
                                    href="#download"
                                >
                                    Download CGT Desk
                                </a>

                                <a
                                    className="btn btn-outline-primary rounded ml-2"
                                    href="#features"
                                >
                                    View Features
                                </a>

                            </div>

                            <p className="cgt-note mt-3">
                                CGT Desk is currently in active development.
                                Tax calculations should be reviewed before filing.
                            </p>

                        </div>


                        <div className="col-lg-5 mt-5 mt-lg-0">

                            <div className="cgt-preview-card">

                                <div className="cgt-preview-top">
                                    <strong>
                                        Financial Year Portfolio
                                    </strong>

                                    <span>
                                        FY 2026
                                    </span>
                                </div>


                                <div className="cgt-metric">
                                    <span>
                                        Closing cost balance
                                    </span>

                                    <strong>
                                        $641,500
                                    </strong>
                                </div>


                                <div className="cgt-metric">
                                    <span>
                                        Market value
                                    </span>

                                    <strong>
                                        $753,700
                                    </strong>
                                </div>


                                <div className="cgt-metric">
                                    <span>
                                        Realized gain
                                    </span>

                                    <strong>
                                        $8,600
                                    </strong>
                                </div>


                                <div className="cgt-metric">
                                    <span>
                                        Unrealized gain
                                    </span>

                                    <strong>
                                        $112,200
                                    </strong>
                                </div>


                                <div className="cgt-preview-foot">
                                    Click report amounts to trace back to source
                                    transactions.
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>



            <section
                className="section"
                id="features"
            >
                <div className="container">

                    <div className="text-center mb-5">

                        <h6 className="subtitle">
                            Built for detailed capital gains work
                        </h6>

                        <h2 className="section-title">
                            One place for assets, calculations and tax workpapers
                        </h2>

                    </div>


                    <div className="row">

                        <Feature
                            icon="ti-stats-up"
                            title="Shares & Securities"
                        >
                            Mandatory asset codes, parcel tracking, FIFO where
                            applicable, holding periods, domestic and international
                            shares.
                        </Feature>


                        <Feature
                            icon="ti-exchange-vertical"
                            title="Crypto"
                        >
                            Buys, sells, swaps, transfers, staking, rewards, mining,
                            airdrops, fees and wallet or exchange tracking.
                        </Feature>


                        <Feature
                            icon="ti-home"
                            title="Real Estate"
                        >
                            Track property acquisitions, disposals and valuations
                            using the current asset workflow, with additional
                            property-specific tax adjustments planned.
                        </Feature>


                        <Feature
                            icon="ti-import"
                            title="Excel & CSV Import"
                        >
                            Map spreadsheet headings, review a live ten-row preview,
                            detect duplicates and preserve source rows.
                        </Feature>


                        <Feature
                            icon="ti-location-pin"
                            title="Accounts & Statements"
                        >
                            Track where assets are held, link statement references
                            and reconcile quantities and values by account.
                        </Feature>


                        <Feature
                            icon="ti-files"
                            title="Tax Workpapers"
                        >
                            Financial-year summaries, realized and unrealized gains,
                            holding detail, source tracing, PDF and Excel exports.
                        </Feature>

                    </div>

                </div>
            </section>



            <section className="section cgt-soft-section">

                <div className="container">

                    <div className="row">

                        <div className="col-lg-5">

                            <h6 className="subtitle">
                                Supported jurisdictions
                            </h6>

                            <h2 className="section-title">
                                Country-aware from file creation
                            </h2>

                            <p>
                                Choose the country when a file is created.
                                CGT Desk then uses the appropriate tax-year
                                structure, terminology and matching framework
                                available for that file.
                            </p>

                        </div>


                        <div className="col-lg-7">

                            <div className="row">

                                <div className="col-md-4 mb-3">

                                    <div className="cgt-country">

                                        <strong>
                                            United States
                                        </strong>

                                        <span>
                                            Calendar or custom FY
                                        </span>

                                    </div>

                                </div>


                                <div className="col-md-4 mb-3">

                                    <div className="cgt-country">

                                        <strong>
                                            United Kingdom
                                        </strong>

                                        <span>
                                            Same-day, 30-day & Section 104 framework
                                        </span>

                                    </div>

                                </div>


                                <div className="col-md-4 mb-3">

                                    <div className="cgt-country">

                                        <strong>
                                            Australia
                                        </strong>

                                        <span>
                                            Financial-year tracking with draft CGT
                                            workpaper support
                                        </span>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            <section className="section">

                <div className="container">

                    <div className="text-center mb-5">

                        <h6 className="subtitle">
                            Workflow
                        </h6>

                        <h2 className="section-title">
                            From statement to tax report
                        </h2>

                    </div>


                    <div className="cgt-steps">

                        <div>
                            <span>1</span>

                            <strong>
                                Create Entity File
                            </strong>

                            <small>
                                Country, entity, FY ending month and currency
                            </small>
                        </div>


                        <div>
                            <span>2</span>

                            <strong>
                                Import Transactions
                            </strong>

                            <small>
                                Match headings and verify the live preview
                            </small>
                        </div>


                        <div>
                            <span>3</span>

                            <strong>
                                Track & Reconcile
                            </strong>

                            <small>
                                Accounts, statements, lots and year-end values
                            </small>
                        </div>


                        <div>
                            <span>4</span>

                            <strong>
                                Generate Reports
                            </strong>

                            <small>
                                Preview, drill down, PDF or Excel
                            </small>
                        </div>

                    </div>

                </div>

            </section>



            <section
                className="section cgt-download-section"
                id="download"
            >

                <div className="container">

                    <div className="cgt-download-box text-center">

                        <h2>
                            Download CGT Desk
                        </h2>


                        {loadingRelease && (
                            <>
                                <p>
                                    Checking the latest CGT Desk release...
                                </p>

                                <div className="mt-4">
                                    <button
                                        className="btn btn-primary rounded"
                                        type="button"
                                        disabled
                                    >
                                        Loading Downloads...
                                    </button>
                                </div>
                            </>
                        )}


                        {!loadingRelease && releaseError && (
                            <>
                                <p>
                                    Download information is temporarily unavailable.
                                    Please try again shortly.
                                </p>

                                <div className="mt-4">
                                    <button
                                        className="btn btn-primary rounded"
                                        type="button"
                                        disabled
                                    >
                                        Downloads Unavailable
                                    </button>
                                </div>
                            </>
                        )}


                        {!loadingRelease && release && (
                            <>

                                <p>
                                    Download the latest CGT Desk desktop application
                                    for Windows or macOS.
                                </p>


                                <p className="cgt-note">
                                    Current version: <strong>{release.version}</strong>
                                    {release.releaseDate && (
                                        <>
                                            {' '}
                                            · Released {release.releaseDate}
                                        </>
                                    )}
                                </p>


                                <div className="mt-4">

                                    {windowsDownload ? (
                                        <a
                                            className="btn btn-primary rounded"
                                            href={windowsDownload}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download for Windows
                                        </a>
                                    ) : (
                                        <button
                                            className="btn btn-primary rounded"
                                            type="button"
                                            disabled
                                        >
                                            Windows Download Unavailable
                                        </button>
                                    )}


                                    {macAppleSiliconDownload ? (
                                        <a
                                            className="btn btn-dark rounded ml-2"
                                            href={macAppleSiliconDownload}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Mac Apple Silicon
                                        </a>
                                    ) : null}


                                    {macIntelDownload ? (
                                        <a
                                            className="btn btn-outline-light rounded ml-2"
                                            href={macIntelDownload}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Mac Intel
                                        </a>
                                    ) : null}

                                </div>


                                <p className="cgt-note mt-4">
                                    CGT Desk is under active development.
                                    Review tax calculations and generated workpapers
                                    before relying on them for filing.
                                </p>

                            </>
                        )}

                    </div>

                </div>

            </section>

        </main>
    );
}

export default CGTDesk;
