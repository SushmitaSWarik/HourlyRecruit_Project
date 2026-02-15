export const HowItWorks = () => {
    return (
        <section className="py-5 bg-light2">
            <div className="container">

                {/* Title */}
                <h2 className="text-center fw-bold mb-4">
                    How It Works
                </h2>

                {/* Steps */}
                <div className="row g-3">

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="p-3 bg-white rounded shadow-sm h-100 d-flex justify-content-center align-items-center">
                            <div className="d-flex ">
                            <span className="fw-bold me-3">1</span>
                            <p className="mb-0 text-muted">
                                Share requirements
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="p-3 bg-white rounded shadow-sm h-100 d-flex justify-content-center align-items-center">
                            <div className="d-flex">
                                <span className="fw-bold me-3">2</span>
                                <p className="mb-0 text-muted">
                                    Get profiles within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="p-3 bg-white rounded shadow-sm h-100 d-flex justify-content-center align-items-center">
                            <div className="d-flex">
                                <span className="fw-bold me-3">3</span>
                                <p className="mb-0 text-muted">
                                    Approve & start work
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="p-3 bg-white rounded shadow-sm h-100 d-flex justify-content-center align-items-center">
                            <div className="d-flex">
                                <span className="fw-bold me-3">4</span>
                                <p className="mb-0 text-muted">
                                    Pay hourly, track progress
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* <div className="col-12 col-md-6 col-lg-3">
                        <div className="p-3 bg-white rounded shadow-sm h-100 text-center">
                            <h6 className="fw-bold  bottom-shadow">4</h6>
                            <p className="mb-0 text-muted">
                                Pay hourly, track progress
                            </p>
                        </div>
                    </div> */}

                </div>
            </div>
        </section>
    );
};


