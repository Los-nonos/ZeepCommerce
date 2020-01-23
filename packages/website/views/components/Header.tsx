import React from 'react';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  links = () => {
    return (
      <>
        <a href={'/'} className="custom-button-button custom-button-transparent">
          {/* <img width="38px" src="../../static/img/rooftopIsotypes/favicon.png" /> */}
          ZEEP
        </a>
        <ul id="navlinks-custom" className="navbar-nav ml-auto navlinks-custom">
          <li id="links-navbar" className="nav-item fade-in ">
            <a href={'/contact'} className="custom-headerLink-navLink custom-header-left-links">
              {'CONTACT'}
            </a>
          </li>
          <li id="links-navbar" className="nav-item fade-in ">
            <a href={'/about'} className="custom-headerLink-navLink custom-header-left-links">
              {'ABOUT'}
            </a>
          </li>
          <li id="links-navbar" className="nav-item fade-in ">
            <a href={'/products'} className="custom-headerLink-navLink custom-header-left-links">
              {'PRODUCTS'}
            </a>
          </li>
        </ul>
      </>
    );
  };

  render() {
    return (
      <nav
        className="navbar navbar-color-on-scroll fixed-top navbar-expand-lg navbar-transparent"
        color-on-scroll="100"
        id="sectionsNav"
      >
        <div className="custom-navbar">
        <div className="container custom-header-container fade-in">{this.links()}</div>
          <div className="container">
            <div className="navbar-translate">
              <a className="navbar-brand" href="/">
                Zeep{' '}
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
