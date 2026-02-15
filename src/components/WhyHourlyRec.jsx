export const WhyHourlyRec = () => {
    return (
        <section className="bg-light">
        <section className="container py-4 py-md-5">

            {/* Heading */}
            <div className="row text-center mb-4 mb-md-5">
                <h2 className="fw-bold">Why HourlyRecruit?</h2>
            </div>

            {/* Two Column Layout */}
            <div className="row justify-content-center text-muted px-2 px-md-0">

                {/* Left Column */}
                <div className="col-md-6">
                    <ul className="list-unstyled font-size lg-font mb-0 mb-2">
                        <li className="mb-2 d-flex align-items-start mb-2">
                            <i className="fa-solid fa-check me-3  mt-1"></i>
                            <span>No long-term lock-ins</span>
                        </li>
                        <li className="mb-2 d-flex align-items-start mb-2">
                            <i className="fa-solid fa-check me-3 mt-1 "></i>
                            <span>Pre-vetted talent</span>
                        </li>
                        <li className="mb-2 d-flex align-items-start">
                            <i className="fa-solid fa-check me-3 mt-1"></i>
                            <span>Flexible scale-up/down</span>
                        </li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                    <ul className="list-unstyled font-size lg-font">
                        <li className="mb-2 d-flex align-items-start  mb-2">
                            <i class="fa-solid fa-check me-3 mt-1"></i>
                            <span>Startups needing fast development</span>
                        </li>
                        <li className="mb-2 d-flex align-items-start  mb-2">
                            <i class="fa-solid fa-check me-3 mt-1"></i>
                            <span>Agencies needing hourly resources</span>
                        </li>
                        <li className="mb-2 d-flex align-items-start">
                            <i class="fa-solid fa-check me-3 mt-1"></i>
                            <span>Product companies requiring flexible QA</span>
                        </li>
                    </ul>
                </div>

            </div>


        </section>
        </section>
    )
}