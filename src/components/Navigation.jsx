// Good using bootstrap, remove focus
export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
            <div className="container">

                {/* Logo */}
                <a className="navbar-brand fw-bold fs-4" href="#">
                    HourlyRecruit
                </a>

                {/* Toggle button for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Buttons */}
                <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
                    <div className="d-flex gap-2 mt-3 mt-lg-0">
                        <button className="btn btn-primary px-4">
                            Hire Now
                        </button>
                        <button className="btn btn-outline-primary px-4">
                            Book Free Call
                        </button>
                    </div>
                </div>

            </div>
        </nav>
    );
};


