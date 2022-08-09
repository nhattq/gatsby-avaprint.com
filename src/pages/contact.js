import React from 'react'
import Layout from '../components/Layout';
import HubspotForm from "react-hubspot-form";

const Contact = () => {
    return (
        <Layout>
           <main>
        <section className="pt-6 pt-md-6 pb-10 pb-md-12">
          <div className="container-lg">
            <div className="justify-content-center row">
              <div className="text-center col-lg-8 col-md-10">
                <h6 className="text-uppercase text-primary mb-5">Contact us</h6>
                <h1 className="display-3 mb-4">How can we help you?</h1>
                <p className="font-size-lg text-muted mb-9">
                  Reach out below and we'll get back to you soon.
                </p>
                <div className="mb-9 row">
                  <div className="py-md-4 mb-6 mb-md-0 col-md-4">
                    <a
                      className="text-reset text-decoration-none"
                      href="/support"
                    >
                      <div className="icon text-primary-light mb-3">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <defs>
                            <path
                              d="M20 18H8a1 1 0 000 2h12v1c0 .627-.358 1-1 1H7c-1.746 0-3-1.306-3-3V5c0-1.694 1.254-3 3-3h12c.642 0 1 .373 1 1v15z"
                              id="a"
                            />
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <use fill="#335EEA" xlinkHref="#a" />
                          </g>
                        </svg>
                      </div>
                      <h6 className="text-uppercase mb-0">Support</h6>
                      <small className="text-muted">Learn the basics</small>
                    </a>
                  </div>
                  <div className="py-md-4 mb-6 mb-md-0 border-left-md col-md-4">
                    <a
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="mailto:support@avaprint.net"
                    >
                      <div className="icon text-primary-light mb-3">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <path
                              d="M21 12.083A6 6 0 0014.083 19H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2v4.083zM18.144 7.84L12 11.148 5.856 7.84a.75.75 0 10-.712 1.32l6.5 3.5c.222.12.49.12.712 0l6.5-3.5a.75.75 0 00-.712-1.32z"
                              fill="#335EEA"
                            />
                            <circle
                              fill="#335EEA"
                              opacity=".3"
                              cx="19.5"
                              cy="17.5"
                              r="2.5"
                            />
                          </g>
                        </svg>
                      </div>
                      <h6 className="text-uppercase mb-0"> Email us</h6>
                      <small className="text-muted">
                        We reply in ~24 hours
                      </small>
                    </a>
                  </div>
                  <div className="py-md-4 border-left-md col-md-4">
                    <a
                      className="text-reset text-decoration-none"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://facebook.com/avaprint.net"
                    >
                      <div className="icon text-primary-light mb-3">
                        <svg width={24} height={24} viewBox="0 0 24 24">
                          <g fill="none" fillRule="evenodd">
                            <path d="M0 0h24v24H0z" />
                            <path
                              d="M14.486 18l-1.689 3.057a1 1 0 01-1.708.069L9.017 18H5a3 3 0 01-3-3V6a3 3 0 013-3h14a3 3 0 013 3v9a3 3 0 01-3 3h-4.514z"
                              fill="#335EEA"
                              opacity=".3"
                            />
                            <path
                              d="M6 7h9a1 1 0 010 2H6a1 1 0 110-2zm0 4h5a1 1 0 010 2H6a1 1 0 010-2z"
                              fill="#335EEA"
                              opacity=".3"
                            />
                          </g>
                        </svg>
                      </div>
                      <h6 className="text-uppercase mb-0">Facebook</h6>
                      <small className="text-muted">Join our community</small>
                    </a>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
				  <p>Contact Info</p>
				  <p>CN1 Tu Liem Industrial Zone</p>
				  <p>Nam Tu Liem, 100000 – Ha Noi</p>
				  <p>support@avaprint.net</p>
				  <p>(+84) 0923 365 789</p>
				  {/*<div>
                      <HubspotForm
                        portalId="22299379"
                        formId="2487cbeb-2b19-488f-80ee-f32457047fce"
                        onSubmit={() => console.log("Submit!")}
                        onReady={(form) => console.log("Form ready!")}
                        loading={<div></div>}
                      />
                    </div>*/
				  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
        </Layout>
    )
}

export default Contact;