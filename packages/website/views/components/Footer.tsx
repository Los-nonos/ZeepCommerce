import React from 'react';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <footer className="footer footer-white footer-big">
        <div className="container">
          <div className="content">
            <div className="row">
              <div className="col-md-3 custom-footer">
                <a href="#pablo">
                  <h5>Material Kit PRO</h5>
                </a>
                <p>
                  {
                    'Probably the best UI Kit in the world! We know you&apos;ve been waiting for it, so don&apos;t be shy!'
                  }
                </p>
              </div>
              <div className="col-md-2">
                <h5>About</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo">Blog</a>
                  </li>
                  <li>
                    <a href="#pablo">About Us</a>
                  </li>
                  <li>
                    <a href="#pablo">Presentation</a>
                  </li>
                  <li>
                    <a href="#pablo">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Market</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo">Sales FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">How to Register</a>
                  </li>
                  <li>
                    <a href="#pablo">Sell Goods</a>
                  </li>
                  <li>
                    <a href="#pablo">Receive Payment</a>
                  </li>
                  <li>
                    <a href="#pablo">Transactions Issues</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-2">
                <h5>Legal</h5>
                <ul className="links-vertical">
                  <li>
                    <a href="#pablo">Transactions FAQ</a>
                  </li>
                  <li>
                    <a href="#pablo">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#pablo">Licenses</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                </p>
                <form className="form form-newsletter" method="" action="">
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your Email..." />
                  </div>
                  <button type="button" className="btn btn-primary btn-just-icon" name="button">
                    <i className="material-icons">mail</i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div>
            <ul className="social-buttons">
              <li>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-twitter">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-facebook">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </li>
              <li>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-dribbble">
                  <i className="fa fa-dribbble"></i>
                </a>
              </li>
              <li>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-google">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#pablo" className="btn btn-just-icon btn-link btn-youtube">
                  <i className="fa fa-youtube-play"></i>
                </a>
              </li>
            </ul>
            <div className="copyright pull-center">{'Copyright &#xA9;'}</div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
