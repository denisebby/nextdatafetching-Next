import React from 'react'
import Head from 'next/head'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>next_data_fetching</title>
          <meta property="og:title" content="next_data_fetching" />
        </Head>
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <div className="home-container01">
            <img
              alt="image"
              src="/external/icons8-dog-park-100-1500h.png"
              className="home-image"
            />
            <h1 className="home-text">Next So Fetch</h1>
          </div>
          <div data-thq="thq-navbar-nav" className="home-desktop-menu">
            <div className="home-buttons">
              <button className="button">Github</button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div className="home-nav">
              <div className="home-top">
                <div className="home-container02">
                  <img
                    alt="image"
                    src="/external/icons8-dog-park-100-1500h.png"
                    className="home-image1"
                  />
                  <h1 className="home-text01">Next So Fetch</h1>
                </div>
                <div data-thq="thq-close-menu" className="home-close-menu">
                  <svg viewBox="0 0 1024 1024" className="home-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-buttons1">
                <button className="button">Github</button>
              </div>
            </div>
          </div>
        </header>
        <div className="home-descriptionc">
          <h1 className="home-text02">A NextJS Data Fetching Guide</h1>
          <svg viewBox="0 0 1024 1024" className="home-icon4">
            <path d="M0 192l320-128v768l-320 128z"></path>
            <path d="M384 32l320 192v736l-320-160z"></path>
            <path d="M768 224l256-192v768l-256 192z"></path>
          </svg>
          <span className="home-text03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </span>
        </div>
        <div className="home-example1c">
          <div className="home-container03">
            <span className="home-text04 Heading">1</span>
          </div>
          <div className="home-container04">
            <h1 className="home-text05 Subheading">
              On the Server, with Fetch
            </h1>
            <div className="home-container05">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
            </div>
            <div className="home-container06"></div>
          </div>
        </div>
        <div className="home-example2c">
          <div className="home-container07">
            <h1 className="home-text07 Subheading">
              On the Server, with 3rd party libraries
            </h1>
            <div className="home-container08">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
            </div>
            <div className="home-container09"></div>
          </div>
          <div className="home-container10">
            <span className="home-text09 Heading">2</span>
          </div>
        </div>
        <div className="home-example3c">
          <div className="home-container11">
            <span className="home-text10 Heading">3</span>
          </div>
          <div className="home-container12">
            <h1 className="home-text11 Subheading">
              On the Client,via Route Handler
            </h1>
            <div className="home-container13">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
            </div>
            <div className="home-container14"></div>
          </div>
        </div>
        <div className="home-example4c">
          <div className="home-container15">
            <h1 className="home-text13 Subheading">
              On the Client, with 3rd party libraries
            </h1>
            <div className="home-container16">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </span>
            </div>
            <div className="home-container17"></div>
          </div>
          <div className="home-container18">
            <span className="home-text15 Heading">4</span>
          </div>
        </div>
        <footer className="home-footer">
          <div className="home-container19">
            <div className="home-container20">
              <img
                alt="image"
                src="/external/icons8-dog-park-100-1500h.png"
                className="home-image2"
              />
              <h1 className="home-text16">Next So Fetch</h1>
            </div>
            <span className="home-text17">
              Icon from https://icons8.com/icons
            </span>
          </div>
          <span className="home-text18">by Denis Ebby</span>
        </footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 2;
            position: relative;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            border-color: var(--dl-color-primary-100);
            border-width: 1px;
            padding-left: var(--dl-space-space-threeunits);
            border-bottom: 2px solid #ff6400;
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-container01 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image {
            width: auto;
            height: 4rem;
            object-fit: cover;
          }
          .home-text {
            color: var(--dl-color-primary-300);
            width: 237px;
            font-size: 30px;
            align-self: center;
            font-family: 'Urbanist';
            font-weight: 900;
            margin-left: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .home-desktop-menu {
            flex: 1;
            display: flex;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-buttons {
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-burger-menu {
            display: none;
          }
          .home-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .home-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: row;
          }
          .home-image1 {
            width: auto;
            height: 5em;
            object-fit: cover;
          }
          .home-text01 {
            width: 237px;
            font-size: 30px;
            align-self: center;
            font-family: 'Urbanist';
            font-weight: 900;
            margin-left: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .home-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .home-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .home-buttons1 {
            display: flex;
            margin-top: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-descriptionc {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .home-text02 {
            color: var(--dl-color-primary-300);
            z-index: 1;
          }
          .home-icon4 {
            fill: var(--dl-color-primary-100);
            width: auto;
            height: 33px;
          }
          .home-text03 {
            z-index: 1;
            margin-top: var(--dl-space-space-oneandhalfunits);
          }
          .home-example1c {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 10%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text04 {
            color: var(--dl-color-primary-300);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 90%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text05 {
            color: var(--dl-color-primary-300);
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .home-container05 {
            flex: 0 0 auto;
            width: 100%;
            height: 25%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 75%;
            display: flex;
            align-items: flex-start;
          }
          .home-example2c {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 90%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text07 {
            color: var(--dl-color-primary-300);
            align-self: flex-end;
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 100%;
            height: 25%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container09 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 75%;
            display: flex;
            align-items: flex-start;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: 10%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text09 {
            color: var(--dl-color-primary-300);
          }
          .home-example3c {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: 10%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text10 {
            color: var(--dl-color-primary-300);
          }
          .home-container12 {
            flex: 0 0 auto;
            width: 90%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text11 {
            color: var(--dl-color-primary-300);
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .home-container13 {
            flex: 0 0 auto;
            width: 100%;
            height: 25%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container14 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 75%;
            display: flex;
            align-items: flex-start;
          }
          .home-example4c {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .home-container15 {
            flex: 0 0 auto;
            width: 90%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text13 {
            color: var(--dl-color-primary-300);
            align-self: flex-end;
            margin-top: 0px;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
            margin-bottom: 0px;
          }
          .home-container16 {
            flex: 0 0 auto;
            width: 100%;
            height: 25%;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container17 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 75%;
            display: flex;
            align-items: flex-start;
          }
          .home-container18 {
            flex: 0 0 auto;
            width: 10%;
            height: 25%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .home-text15 {
            color: var(--dl-color-primary-300);
          }
          .home-footer {
            width: 100%;
            height: var(--dl-size-size-large);
            display: flex;
            max-width: 100%;
            margin-top: auto;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
            background-color: var(--dl-color-primary-100);
          }
          .home-container19 {
            flex: 0 0 auto;
            width: 40%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-container20 {
            flex: 0 0 auto;
            width: 100%;
            height: 50%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
          }
          .home-image2 {
            width: auto;
            height: 2.5rem;
            object-fit: cover;
          }
          .home-text16 {
            color: var(--dl-color-primary-300);
            width: 237px;
            font-size: 15px;
            align-self: center;
            font-family: 'Urbanist';
            font-weight: 900;
            margin-left: var(--dl-space-space-halfunit);
            text-transform: capitalize;
          }
          .home-text17 {
            font-size: 10px;
            margin-top: var(--dl-space-space-halfunit);
            font-family: 'Urbanist';
            font-weight: 400;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .home-text18 {
            font-size: 16px;
            align-self: flex-end;
            font-family: 'Urbanist';
            line-height: 1.15;
            text-decoration: none;
          }
          @media (max-width: 991px) {
            .home-text17 {
              font-size: 10px;
            }
          }
          @media (max-width: 767px) {
            .home-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image {
              height: 3em;
            }
            .home-text {
              font-size: 20px;
            }
            .home-desktop-menu {
              display: none;
            }
            .home-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .home-mobile-menu {
              height: 30vh;
            }
            .home-image1 {
              height: 3em;
            }
            .home-text01 {
              font-size: 20px;
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-image2 {
              height: 3em;
            }
            .home-text16 {
              font-size: 20px;
            }
            .home-text17 {
              font-size: 10px;
            }
          }
          @media (max-width: 479px) {
            .home-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .home-container01 {
              width: 50%;
            }
            .home-text {
              font-size: 14px;
            }
            .home-mobile-menu {
              right: -9px;
              bottom: -359px;
              height: 187px;
              padding: 16px;
            }
            .home-container02 {
              width: 50%;
            }
            .home-text01 {
              font-size: 14px;
            }
            .home-text02 {
              color: var(--dl-color-primary-300);
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-container19 {
              width: 50%;
            }
            .home-text16 {
              font-size: 14px;
            }
            .home-text17 {
              font-size: 10px;
            }
            .home-text18 {
              align-self: flex-end;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
