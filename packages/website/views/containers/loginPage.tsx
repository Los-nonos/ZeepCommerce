import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';

class LoginPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <>
        <Head>
          <title>Zeep - Login</title>
          <link href="../../static/build/scss/containers/login.css" rel="stylesheet" />
        </Head>
        <Header />
        <div className="page-header header-filter custom-header-login">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                <form className="form" method="" action="">
                  <div className="card card-login card-hidden">
                    <div className="card-header card-header-primary text-center">
                      <h4 className="card-title">Login</h4>
                    </div>
                    <div className="card-body ">
                      <p className="card-description text-center">Or Be Classical</p>
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">face</i>
                            </span>
                          </div>
                          <input type="text" className="form-control" placeholder="First Name..." />
                        </div>
                      </span>
                      <span className="bmd-form-group">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text icon">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <input type="password" className="form-control" placeholder="Password..." />
                        </div>
                      </span>
                    </div>
                    <div className="card-footer justify-content-center">
                      <a href="" className="btn btn-rose btn-link btn-lg">
                        Lets Go
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default LoginPage;
