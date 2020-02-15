import React from 'react';

class Faq extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" href="../../styles/scss/sections/body/Faq" />
        </head>
        <div className="section questions-section">
          <h2 className="title text-center">Frequently asked Questions</h2>
          <div className="container">
            <div className="col-md-6 ml-auto mr-auto">
              <div id="accordion" role="tablist" aria-multiselectable="true" className="card-collapse">
                <div className="card card-plain">
                  <div className="card-header" id="headingOne">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      Where can I get more information?
                    </button>
                  </div>
                  <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      <p>Please, schedule an interview and we will give you all the details.</p>
                    </div>
                  </div>
                </div>
                <div className="card card-plain">
                  <div className="card-header" id="headingTwo">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Which are the payment methods?
                    </button>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      <p>You can make bank deposits, through credit cards or cash payment.</p>
                    </div>
                  </div>
                </div>
                <div className="card card-plain">
                  <div className="card-header" id="headingThree">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      I'm not a company, I'm a particular user. Can I also take courses?
                    </button>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      <p>
                        The entire platform is oriented to train software companies. We don't recommend it for
                        particular users.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card card-plain">
                  <div className="card-header" id="headingFour">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Can the courses be presential?
                    </button>
                  </div>
                  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                      <p>
                        Yes they can. Although it will have an extra cost for the teacher's travel allowances. Check
                        with your Customer Success Manager for more information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
