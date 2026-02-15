export const HeroSection = () => {
  return (
    <section className="hero bg-light pt-5 pb-3 pb-md-5">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left Content */}
          <div className="col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
            <h1 className="fw-bold fw-semibold display-5 mb-4">
              Hire Developers & Test
              Engineers By the Hour
            </h1>

            <p className="text-muted fs-5 mb-4">
              Get pre-vetted developers, programmers, and testers when you
              need them. Pay hourly, scale instantly.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3">
              <button className="btn btn-primary px-4 py-2">
                Hire Now
              </button>

              <button className="btn btn-outline-primary px-4 py-2">
                Book Free Call
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-10 col-md-8 text-center mx-auto mb-0 mb-md-4 mb-lg-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"   // Replace with your image path
              alt="Developer Illustration"
              className="img-fluid w-75"
            />
          </div>

        </div>
      </div>
    </section>
  );
};


