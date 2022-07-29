import React from "react";

const PageHeader = ({ title, heading, description }) => {
  return (
    <>
      <section className="pt-6 pt-md-11 pb-12 bg-gradient-light">
        <div className="container-lg">
          <div className="justify-content-center row">
            <div className="text-center col-lg-8 col-md-10">
              <h6 className="text-uppercase text-primary mb-5">{title}</h6>
              <h2 className="display-3 mb-4">{heading}</h2>
              <p className="font-size-lg text-muted mb-9">{description}</p>
            </div>
          </div>
          <div className="justify-content-center row">
            <div className="text-center col-lg-6 col-md-8 col-12">
              <div>
                <div
                  className="shadow input-group input-group-lg"
                  style={{ zIndex: 1 }}
                >
                  <div className="bg-white input-group-prepend">
                    <span className="bg-white input-group-text">
                      <i className="feather feather-search" />
                    </span>
                  </div>
                  <input
                    placeholder="Search"
                    className="bg-white form-control form-control-lg"
                    // defaultValue
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="position-relative">
        <div className="shape shape-fluid-x shape-top text-white">
          <div className="shape-img pb-8 pb-md-10">
            <svg viewBox="0 0 100 50" preserveAspectRatio="none">
              <path d="M0 25h25L75 0h25v50H0z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      <div className="position-relative d-none d-md-block">
        <div className="position-absolute top-left text-warning mt-n11 ml-n8">
          <svg
            width={185}
            height={186}
            viewBox="0 0 185 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={2} cy={2} r={2} fill="currentColor" />
            <circle cx={22} cy={2} r={2} fill="currentColor" />
            <circle cx={42} cy={2} r={2} fill="currentColor" />
            <circle cx={62} cy={2} r={2} fill="currentColor" />
            <circle cx={82} cy={2} r={2} fill="currentColor" />
            <circle cx={102} cy={2} r={2} fill="currentColor" />
            <circle cx={122} cy={2} r={2} fill="currentColor" />
            <circle cx={142} cy={2} r={2} fill="currentColor" />
            <circle cx={162} cy={2} r={2} fill="currentColor" />
            <circle cx={182} cy={2} r={2} fill="currentColor" />
            <circle cx={2} cy={22} r={2} fill="currentColor" />
            <circle cx={22} cy={22} r={2} fill="currentColor" />
            <circle cx={42} cy={22} r={2} fill="currentColor" />
            <circle cx={62} cy={22} r={2} fill="currentColor" />
            <circle cx={82} cy={22} r={2} fill="currentColor" />
            <circle cx={102} cy={22} r={2} fill="currentColor" />
            <circle cx={122} cy={22} r={2} fill="currentColor" />
            <circle cx={142} cy={22} r={2} fill="currentColor" />
            <circle cx={162} cy={22} r={2} fill="currentColor" />
            <circle cx={182} cy={22} r={2} fill="currentColor" />
            <circle cx={2} cy={42} r={2} fill="currentColor" />
            <circle cx={22} cy={42} r={2} fill="currentColor" />
            <circle cx={42} cy={42} r={2} fill="currentColor" />
            <circle cx={62} cy={42} r={2} fill="currentColor" />
            <circle cx={82} cy={42} r={2} fill="currentColor" />
            <circle cx={102} cy={42} r={2} fill="currentColor" />
            <circle cx={122} cy={42} r={2} fill="currentColor" />
            <circle cx={142} cy={42} r={2} fill="currentColor" />
            <circle cx={162} cy={42} r={2} fill="currentColor" />
            <circle cx={182} cy={42} r={2} fill="currentColor" />
            <circle cx={2} cy={62} r={2} fill="currentColor" />
            <circle cx={22} cy={62} r={2} fill="currentColor" />
            <circle cx={42} cy={62} r={2} fill="currentColor" />
            <circle cx={62} cy={62} r={2} fill="currentColor" />
            <circle cx={82} cy={62} r={2} fill="currentColor" />
            <circle cx={102} cy={62} r={2} fill="currentColor" />
            <circle cx={122} cy={62} r={2} fill="currentColor" />
            <circle cx={142} cy={62} r={2} fill="currentColor" />
            <circle cx={162} cy={62} r={2} fill="currentColor" />
            <circle cx={182} cy={62} r={2} fill="currentColor" />
            <circle cx={2} cy={82} r={2} fill="currentColor" />
            <circle cx={22} cy={82} r={2} fill="currentColor" />
            <circle cx={42} cy={82} r={2} fill="currentColor" />
            <circle cx={62} cy={82} r={2} fill="currentColor" />
            <circle cx={82} cy={82} r={2} fill="currentColor" />
            <circle cx={102} cy={82} r={2} fill="currentColor" />
            <circle cx={122} cy={82} r={2} fill="currentColor" />
            <circle cx={142} cy={82} r={2} fill="currentColor" />
            <circle cx={162} cy={82} r={2} fill="currentColor" />
            <circle cx={182} cy={82} r={2} fill="currentColor" />
            <circle cx={2} cy={102} r={2} fill="currentColor" />
            <circle cx={22} cy={102} r={2} fill="currentColor" />
            <circle cx={42} cy={102} r={2} fill="currentColor" />
            <circle cx={62} cy={102} r={2} fill="currentColor" />
            <circle cx={82} cy={102} r={2} fill="currentColor" />
            <circle cx={102} cy={102} r={2} fill="currentColor" />
            <circle cx={122} cy={102} r={2} fill="currentColor" />
            <circle cx={142} cy={102} r={2} fill="currentColor" />
            <circle cx={162} cy={102} r={2} fill="currentColor" />
            <circle cx={182} cy={102} r={2} fill="currentColor" />
            <circle cx={2} cy={122} r={2} fill="currentColor" />
            <circle cx={22} cy={122} r={2} fill="currentColor" />
            <circle cx={42} cy={122} r={2} fill="currentColor" />
            <circle cx={62} cy={122} r={2} fill="currentColor" />
            <circle cx={82} cy={122} r={2} fill="currentColor" />
            <circle cx={102} cy={122} r={2} fill="currentColor" />
            <circle cx={122} cy={122} r={2} fill="currentColor" />
            <circle cx={142} cy={122} r={2} fill="currentColor" />
            <circle cx={162} cy={122} r={2} fill="currentColor" />
            <circle cx={182} cy={122} r={2} fill="currentColor" />
            <circle cx={2} cy={142} r={2} fill="currentColor" />
            <circle cx={22} cy={142} r={2} fill="currentColor" />
            <circle cx={42} cy={142} r={2} fill="currentColor" />
            <circle cx={62} cy={142} r={2} fill="currentColor" />
            <circle cx={82} cy={142} r={2} fill="currentColor" />
            <circle cx={102} cy={142} r={2} fill="currentColor" />
            <circle cx={122} cy={142} r={2} fill="currentColor" />
            <circle cx={142} cy={142} r={2} fill="currentColor" />
            <circle cx={162} cy={142} r={2} fill="currentColor" />
            <circle cx={182} cy={142} r={2} fill="currentColor" />
            <circle cx={2} cy={162} r={2} fill="currentColor" />
            <circle cx={22} cy={162} r={2} fill="currentColor" />
            <circle cx={42} cy={162} r={2} fill="currentColor" />
            <circle cx={62} cy={162} r={2} fill="currentColor" />
            <circle cx={82} cy={162} r={2} fill="currentColor" />
            <circle cx={102} cy={162} r={2} fill="currentColor" />
            <circle cx={122} cy={162} r={2} fill="currentColor" />
            <circle cx={142} cy={162} r={2} fill="currentColor" />
            <circle cx={162} cy={162} r={2} fill="currentColor" />
            <circle cx={182} cy={162} r={2} fill="currentColor" />
            <circle cx={2} cy={182} r={2} fill="currentColor" />
            <circle cx={22} cy={182} r={2} fill="currentColor" />
            <circle cx={42} cy={182} r={2} fill="currentColor" />
            <circle cx={62} cy={182} r={2} fill="currentColor" />
            <circle cx={82} cy={182} r={2} fill="currentColor" />
            <circle cx={102} cy={182} r={2} fill="currentColor" />
            <circle cx={122} cy={182} r={2} fill="currentColor" />
            <circle cx={142} cy={182} r={2} fill="currentColor" />
            <circle cx={162} cy={182} r={2} fill="currentColor" />
            <circle cx={182} cy={182} r={2} fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="position-relative d-none d-md-block">
        <div className="position-absolute top-right text-primary-dark mt-n15">
          <svg
            width={185}
            height={186}
            viewBox="0 0 185 186"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx={2} cy={2} r={2} fill="currentColor" />
            <circle cx={22} cy={2} r={2} fill="currentColor" />
            <circle cx={42} cy={2} r={2} fill="currentColor" />
            <circle cx={62} cy={2} r={2} fill="currentColor" />
            <circle cx={82} cy={2} r={2} fill="currentColor" />
            <circle cx={102} cy={2} r={2} fill="currentColor" />
            <circle cx={122} cy={2} r={2} fill="currentColor" />
            <circle cx={142} cy={2} r={2} fill="currentColor" />
            <circle cx={162} cy={2} r={2} fill="currentColor" />
            <circle cx={182} cy={2} r={2} fill="currentColor" />
            <circle cx={2} cy={22} r={2} fill="currentColor" />
            <circle cx={22} cy={22} r={2} fill="currentColor" />
            <circle cx={42} cy={22} r={2} fill="currentColor" />
            <circle cx={62} cy={22} r={2} fill="currentColor" />
            <circle cx={82} cy={22} r={2} fill="currentColor" />
            <circle cx={102} cy={22} r={2} fill="currentColor" />
            <circle cx={122} cy={22} r={2} fill="currentColor" />
            <circle cx={142} cy={22} r={2} fill="currentColor" />
            <circle cx={162} cy={22} r={2} fill="currentColor" />
            <circle cx={182} cy={22} r={2} fill="currentColor" />
            <circle cx={2} cy={42} r={2} fill="currentColor" />
            <circle cx={22} cy={42} r={2} fill="currentColor" />
            <circle cx={42} cy={42} r={2} fill="currentColor" />
            <circle cx={62} cy={42} r={2} fill="currentColor" />
            <circle cx={82} cy={42} r={2} fill="currentColor" />
            <circle cx={102} cy={42} r={2} fill="currentColor" />
            <circle cx={122} cy={42} r={2} fill="currentColor" />
            <circle cx={142} cy={42} r={2} fill="currentColor" />
            <circle cx={162} cy={42} r={2} fill="currentColor" />
            <circle cx={182} cy={42} r={2} fill="currentColor" />
            <circle cx={2} cy={62} r={2} fill="currentColor" />
            <circle cx={22} cy={62} r={2} fill="currentColor" />
            <circle cx={42} cy={62} r={2} fill="currentColor" />
            <circle cx={62} cy={62} r={2} fill="currentColor" />
            <circle cx={82} cy={62} r={2} fill="currentColor" />
            <circle cx={102} cy={62} r={2} fill="currentColor" />
            <circle cx={122} cy={62} r={2} fill="currentColor" />
            <circle cx={142} cy={62} r={2} fill="currentColor" />
            <circle cx={162} cy={62} r={2} fill="currentColor" />
            <circle cx={182} cy={62} r={2} fill="currentColor" />
            <circle cx={2} cy={82} r={2} fill="currentColor" />
            <circle cx={22} cy={82} r={2} fill="currentColor" />
            <circle cx={42} cy={82} r={2} fill="currentColor" />
            <circle cx={62} cy={82} r={2} fill="currentColor" />
            <circle cx={82} cy={82} r={2} fill="currentColor" />
            <circle cx={102} cy={82} r={2} fill="currentColor" />
            <circle cx={122} cy={82} r={2} fill="currentColor" />
            <circle cx={142} cy={82} r={2} fill="currentColor" />
            <circle cx={162} cy={82} r={2} fill="currentColor" />
            <circle cx={182} cy={82} r={2} fill="currentColor" />
            <circle cx={2} cy={102} r={2} fill="currentColor" />
            <circle cx={22} cy={102} r={2} fill="currentColor" />
            <circle cx={42} cy={102} r={2} fill="currentColor" />
            <circle cx={62} cy={102} r={2} fill="currentColor" />
            <circle cx={82} cy={102} r={2} fill="currentColor" />
            <circle cx={102} cy={102} r={2} fill="currentColor" />
            <circle cx={122} cy={102} r={2} fill="currentColor" />
            <circle cx={142} cy={102} r={2} fill="currentColor" />
            <circle cx={162} cy={102} r={2} fill="currentColor" />
            <circle cx={182} cy={102} r={2} fill="currentColor" />
            <circle cx={2} cy={122} r={2} fill="currentColor" />
            <circle cx={22} cy={122} r={2} fill="currentColor" />
            <circle cx={42} cy={122} r={2} fill="currentColor" />
            <circle cx={62} cy={122} r={2} fill="currentColor" />
            <circle cx={82} cy={122} r={2} fill="currentColor" />
            <circle cx={102} cy={122} r={2} fill="currentColor" />
            <circle cx={122} cy={122} r={2} fill="currentColor" />
            <circle cx={142} cy={122} r={2} fill="currentColor" />
            <circle cx={162} cy={122} r={2} fill="currentColor" />
            <circle cx={182} cy={122} r={2} fill="currentColor" />
            <circle cx={2} cy={142} r={2} fill="currentColor" />
            <circle cx={22} cy={142} r={2} fill="currentColor" />
            <circle cx={42} cy={142} r={2} fill="currentColor" />
            <circle cx={62} cy={142} r={2} fill="currentColor" />
            <circle cx={82} cy={142} r={2} fill="currentColor" />
            <circle cx={102} cy={142} r={2} fill="currentColor" />
            <circle cx={122} cy={142} r={2} fill="currentColor" />
            <circle cx={142} cy={142} r={2} fill="currentColor" />
            <circle cx={162} cy={142} r={2} fill="currentColor" />
            <circle cx={182} cy={142} r={2} fill="currentColor" />
            <circle cx={2} cy={162} r={2} fill="currentColor" />
            <circle cx={22} cy={162} r={2} fill="currentColor" />
            <circle cx={42} cy={162} r={2} fill="currentColor" />
            <circle cx={62} cy={162} r={2} fill="currentColor" />
            <circle cx={82} cy={162} r={2} fill="currentColor" />
            <circle cx={102} cy={162} r={2} fill="currentColor" />
            <circle cx={122} cy={162} r={2} fill="currentColor" />
            <circle cx={142} cy={162} r={2} fill="currentColor" />
            <circle cx={162} cy={162} r={2} fill="currentColor" />
            <circle cx={182} cy={162} r={2} fill="currentColor" />
            <circle cx={2} cy={182} r={2} fill="currentColor" />
            <circle cx={22} cy={182} r={2} fill="currentColor" />
            <circle cx={42} cy={182} r={2} fill="currentColor" />
            <circle cx={62} cy={182} r={2} fill="currentColor" />
            <circle cx={82} cy={182} r={2} fill="currentColor" />
            <circle cx={102} cy={182} r={2} fill="currentColor" />
            <circle cx={122} cy={182} r={2} fill="currentColor" />
            <circle cx={142} cy={182} r={2} fill="currentColor" />
            <circle cx={162} cy={182} r={2} fill="currentColor" />
            <circle cx={182} cy={182} r={2} fill="currentColor" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
