import React from 'react';

class Header extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="header-3">
        <nav className="navbar navbar-absolute navbar-expand-lg custom-navbar">
          <div className="container custom-nav-complit">
            <div className="navbar-translate custom-zeep-color">
              <a className="navbar-brand" href="/">
                Zeep
              </a>
              <button
                type="button"
                className="ml-auto navbar-toggler"
                data-toggle="collapse"
                data-target="#navigation-example3"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse custom-li-a-color" id="navigation-example3">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="/faq" className="nav-link">
                    Faq
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/about" className="nav-link">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/products" className="nav-link">
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/contact" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
