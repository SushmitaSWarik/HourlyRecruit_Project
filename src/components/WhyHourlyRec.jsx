export const WhyHourlyRec = () => {
    return (
        // <section className="bg-light2">
        <section className="container py-5">

            {/* Heading */}
            <div className="row text-center mb-5">
                <h2 className="fw-bold">Why HourlyRecruit?</h2>
            </div>

            {/* Two Column Layout */}
            <div className="row justify-content-center">

                {/* Left Column */}
                <div className="col-md-6">
                    <ul className="list-unstyled font-size">
                        <li className="mb-2"><i class="fa-solid fa-check me-2"></i>No long-term lock-ins</li>
                        <li className="mb-2"><i class="fa-solid fa-check me-2"></i>Pre-vetted talent</li>
                        <li className="mb-2"><i class="fa-solid fa-check me-2"></i>Flexible scale-up/down</li>
                    </ul>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                    <ul className="list-unstyled font-size">
                        <li className="mb-2"><i class="fa-solid fa-check me-2"></i>Startups needing fast development</li>
                        <li className="mb-2"><i class="fa-solid fa-check me-2"></i>Agencies needing hourly resources</li>
                        <li className="mb-2"><i class="fa-solid fa-check me-2"></i>Product companies requiring flexible QA</li>
                    </ul>
                </div>

            </div>
        </section>
        // </section>
    )
}