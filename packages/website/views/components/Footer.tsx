import React from 'react';

class Footer extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <footer className="footer footer-default">
        <div className="container">
          <nav className="float-left">
            <ul>
              <li>
                <a href="#">power by Zeep Comerce</a>
              </li>
            </ul>
          </nav>
          <div className="copyrigth">© 2020 por Zeep Comerce</div>
          {/* <div className="copyright float-right">
        &copy;
        <script>
          document.write(new Date().getFullYear())
        </script>, made with <i className="material-icons">favorite</i> by
        <a href="https://www.creative-tim.com/" target="blank">Creative Tim</a> for a better web.
      </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
