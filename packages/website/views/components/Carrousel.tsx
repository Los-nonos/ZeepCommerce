import React from 'react';

class Carrousel extends React.Component {
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="page-header header-filter">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-left">
                    <h1 className="title">Material Kit PRO</h1>
                    <h4>
                      Zeep commerce un grupo de amigos en un departamento, que se miraron a la cara y se propusieron desarrollar una plataforma.
                    </h4>
                    <br />
                    <div className="buttons">
                      <a href="/products" className="btn btn-danger btn-lg custom-button">
                        productos
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link">
                        <i className="fa fa-get-pocket"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-auto mr-auto text-center">
                    <h1 className="title">Material Kit PRO</h1>
                    <h4>
                      Dolce &amp; Gabbana is a luxury Italian fashion house founded in 1985 in Legnano by Italian
                      designers Domenico Dolce and Stefano Gabbana. The two met in Milan in 1980 and designed for the
                      same fashion house.
                    </h4>
                    <br />
                    <h6>Connect with us on:</h6>
                    <div className="buttons">
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link btn-lg">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link btn-lg">
                        <i className="fa fa-facebook-square"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link btn-lg">
                        <i className="fa fa-google-plus"></i>
                      </a>
                      <a href="#pablo" className="btn btn-just-icon btn-white btn-link btn-lg">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="page-header header-filter">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 ml-auto text-right">
                    <h1 className="title">New Collection 50% Off</h1>
                    <h4>
                      There&apos;s no doubt that Tesla is delighted with the interest, but the data also raises a few
                      questions. How long will it take for Tesla to fulfill all those extra orders?
                    </h4>
                    <br />
                    <div className="buttons">
                      <a href="#pablo" className="btn btn-white btn-link btn-lg">
                        <i className="material-icons">share</i> Share Offer
                      </a>
                      <a href="#pablo" className="btn btn-danger btn-lg">
                        <i className="material-icons">shopping_cart</i> Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <i className="material-icons">keyboard_arrow_left</i>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <i className="material-icons">keyboard_arrow_right</i>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carrousel;